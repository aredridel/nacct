define(['backbone', 'app/models/TransactionCollection'], function(Backbone, Transactions) {
    return Backbone.Model.extend({
        initialize: function() {
            this.transactions = new Transactions();
            this.transactions.url = this.url() + '/transactions';
        }
    });
});
