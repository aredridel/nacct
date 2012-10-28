define(['app/App', 'backbone', 'jquery'], function(App, Backbone, $) {
    var Router = Backbone.Router.extend({
        routes: {
            'accounts': 'accounts',
            '*args': 'default'
        }
    });

    var router = new Router();
    new App({el: $('body')});

    Backbone.history.start({pushState: true});
});
