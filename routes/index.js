var run = false;
module.exports = function(req, res, next) {
    if (run) {
        return next();
    }

    run = true;

    console.log('setting up routes', arguments);

    var main = function main(req, res, next) {
        res.render('index', {title: 'test'});
    };

    req.app.get('/', main);
    req.app.get('/accounts', main);
    req.app.get('/accounts2', main);

    return next();
};
