define(['backbone', 'app/Menu'], function(Backbone, Menu) {
    /*jshint browser:true*/
    "use strict";
    return Backbone.View.extend({
        initialize: function() {
            this.navbar = new Menu({el: this.$('.navbar')});
        },
        events: {
        }
    });
});
