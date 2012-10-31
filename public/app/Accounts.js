define(['backbone', 'underscore', 'text!app/Accounts.html'], function(Backbone, _, templateText) {

    var template = _.template(templateText);
    return Backbone.View.extend({
        className: 'Accounts',
        initialize: function() {
            this.collection.on('reset', this.render, this);
            this.collection.on('add', this.render, this);
            return this;
        },
        render: function() {
            this.$el.empty().append(template(this.collection));
            return this;
        }
    });
});
