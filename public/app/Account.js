define(['backbone', 'underscore', 'text!app/Account.html'], function(Backbone, _, templateText) {
    var template = _.template(templateText); 
    return Backbone.View.extend({
        className: 'Account',
        render: function() {
            if (this.model) {
                var self = this;
                this.model.transactions.retrieve(function(err, collection) {
                    console.log(collection);
                    self.$el.append(template(self.model));
                });
            } else {
                this.$el.append('not found');
            }
        }
    });
});
