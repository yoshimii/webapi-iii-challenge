//logs request url, request method, and timestamp to the console

module.exports = function logger(req, res, next) {
    console.log(`You made a ${req.method} request to ${req.url} at ${'Time:', Date.now()}`);

    next();
}