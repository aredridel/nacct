define(['backbone'], function(Backbone) {
    /*jshint browser:true*/
    "use strict";
    return Backbone.View.extend({
        initialize: function() {
        },
        events: {
            'click .internal': function(ev) {
                ev.preventDefault();
            }
        }
    });
});
