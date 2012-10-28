define(['app/Menu', 'backbone', 'jquery', 'app/Accounts'], function(Menu, Backbone, $, Accounts) {
    var Router = Backbone.Router.extend({
        initialize: function() {
            this.navbar = new Menu({el: $('#navigation'), router: this });
        },
        routes: {
            'accounts': 'showAccounts',
            '*args': 'default'
        },
        showAccounts: function() {
            this.showView(new Accounts({}));
        },
        showView: function(view) {
            this.currentView = view;
            $('#mainView').append(this.currentView.el);
        }

    });

    var router = new Router();

    Backbone.history.start({pushState: true});
});
