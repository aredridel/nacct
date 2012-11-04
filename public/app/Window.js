define(['backbone'], function(Backbone) {
    /*jshint browser:true*/
    "use strict";
    return Backbone.View.extend({
        initialize: function(options) {
            this.router = options.router;
        },
        events: {
            'click a[href]': function(ev) {
                if (ev.target.host == document.location.host) { 
                    ev.preventDefault();
                    this.router.navigate(ev.target.pathname, {trigger: true});
                }
            }
        }
    });
});
