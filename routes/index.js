var requireReload = require('require-reload');
var run = false;
module.exports = function(req, res, next) {
    if (run) {
        return next();
    }

    run = true;

    var loadApp = function loadApp(req, res, next) {
        res.render('app');
    };

    req.app.get('/', loadApp);
    req.app.get('/accounts', loadApp);

    req.app.resource('data/accounts', requireReload('./accounts'));

    return next();
};
