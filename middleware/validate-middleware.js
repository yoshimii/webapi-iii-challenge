//validates userID, body on a request for new user, and body on a request for new post

//validate user ID

module.exports = function validateUserID (req, res, next) {
    const userID = req.params.id;
    const userBody = req.body;
    if(!userBody.id) {
        res.status(400).json({ message: 'invalid user ID'})
    } else {
        req.user = req.body;
        next();
    }
}

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};