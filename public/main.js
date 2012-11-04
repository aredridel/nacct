define([
    'app/Window', 'backbone', 'jquery', 'app/Accounts',
    'app/models/Accounts', 'app/models/Account', 'app/Account'
], function(Window, Backbone, $, Accounts, AccountsCollection, Account, AccountView) {

    var Router = Backbone.Router.extend({
        initialize: function() {
            this.navbar = new Window({el: $('body'), router: this});
            this.accounts = new AccountsCollection();
            this.accounts.fetch();
        },

        routes: {
            'accounts': 'showAccounts',
            'accounts/:account': 'showAccount',
            '': 'main'
        },

        showAccounts: function() {
            var accounts = new Accounts({collection: this.accounts});
            this.showView(accounts);
        },

        showAccount: function(account) {
            var self = this;
            this.accounts.retrieve(function(err, accounts) {
                var model = accounts.get(account);
                self.showView(new AccountView({model: model}));
            });
        },

        showView: function(view) {
            if (this.currentView) {
                this.currentView.remove();
            }

            if (!view) return;

            this.currentView = view;
            view.render();
            $('#mainView').append(this.currentView.el);
        },

        main: function() {
            this.showView();
        }

    });

    var router = new Router();

    Backbone.history.start({pushState: true});
});
