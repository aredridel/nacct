define(['app/Menu', 'backbone', 'jquery'], function(Menu, Backbone, $) {
    var Router = Backbone.Router.extend({
        initialize: function() {
            this.navbar = new Menu({el: $('.navbar'), router: this });
        },
        routes: {
            'accounts': 'accounts',
            '*args': 'default'
        }
    });

    var router = new Router();

    Backbone.history.start({pushState: true});
});
