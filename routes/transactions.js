
var data = [
    [ 
        {date: '2012-11-01', description: 'A restaurant', amount: 15.31}
    ],
    [ 
        {date: '2012-11-01', description: 'A coffee shop', amount: 15.31}
    ]
];

module.exports = {
    index: function(req, res) {
        console.log(req.params);
        res.send(data[req.params.account]);
    }
};
