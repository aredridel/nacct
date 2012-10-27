
module.exports = function(app) {
    
    function main(req, res) {
        res.render('index', {title: 'test'});
    }

    app.get('/', main);
};
