var run = false;
module.exports = function(req, res, next) {
    if (run) {
        return next();
    }

    run = true;

    console.log('setting up routes', arguments);

    var main = function main(req, res, next) {
        res.render('app');
    };

    req.app.get('/', main);
    req.app.get('/accounts', main);

    return next();
};
