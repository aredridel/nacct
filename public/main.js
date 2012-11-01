define(['app/Menu', 'backbone', 'jquery', 'app/Accounts', 'app/models/Accounts'], function(Menu, Backbone, $, Accounts, AccountsCollection) {
    var Router = Backbone.Router.extend({
        initialize: function() {
            this.navbar = new Menu({el: $('#navigation')});
        },

        routes: {
            'accounts': 'showAccounts',
            '*args': 'default'
        },

        showAccounts: function() {
            var accounts = new Accounts({collection: new AccountsCollection()});
            this.showView(accounts);
            accounts.collection.fetch();
        },

        showView: function(view) {
            if (this.currentView) {
                this.currentView.remove();
            }

            if (!view) return;

            this.currentView = view;
            $('#mainView').append(this.currentView.el);
        },

        default: function() {
            this.showView();
        }

    });

    var router = new Router();

    Backbone.history.start({pushState: true});

    $('body').on('click', 'a[href]', function(ev) {
        if (ev.target.host == document.location.host) { 
            ev.preventDefault();
            router.navigate(ev.target.pathname, {trigger: true});
        }
    });
});
