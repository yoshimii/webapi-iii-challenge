//logs request url, request method, and timestamp to the console

module.exports = function logger(req, res, next) {
    console.log(req.url, req.method, 'Time:', Date.now());

    next();
}