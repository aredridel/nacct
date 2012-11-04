var accounts = [
    {id: 1, name: 'Bank of Evil', balance: 205.91},
    {id: 2, name: 'Former Lehman Brothers', balance: 87.50}
];

module.exports = {
    base: '/data/',
    index: function(req, res) {
        res.send(accounts);
    },
    show: function(req, res) {
        res.send(accounts[req.params.account]);
    }
};
