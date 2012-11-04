define(['backbone'], function(Backbone) {
    return Backbone.Collection.extend({
        retrieve: function(callback) {
            if (this._promiseState == 'fetched') {
                callback(null, this);
            } else if (this._promiseState == 'fetching') {
                return;
            } else {
                this._promiseState = 'fetching';
                this.fetch({
                    success: function(collection, response) { 
                        collection._promiseState = 'fetched';
                        callback(null, collection);
                    },
                    error: function(collection, response) {
                        delete collection._promiseState;
                        callback(response, collection);
                    }
                });
            }
        }
    });
});
