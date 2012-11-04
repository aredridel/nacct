define(['util/PromisedCollection', 'app/models/Account'], function(PromisedCollection, Account) {
    return PromisedCollection.extend({
        model: Account,
        url: '/data/accounts'
    });
});
