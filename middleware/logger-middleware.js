//logs request url, request method, and timestamp to the console

module.export = function logger(req, res, next) {
    console.log(req);
}