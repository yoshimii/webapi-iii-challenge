//validates userID, body on a request for new user, and body on a request for new post

//validate user ID

const User = require('../users/userDb');

module.exports = validateUserId, validateUser;

module.exports =  async function validateUserId(req, res, next) {
    const user = await User.getById(req.params.id)  
    if (user) {
      req.user = user
      next()
    } else {
      next(400)
    }
  }

function validateUser(req, res, next) {

    console.log(req.body)
    next()
  }

// function validatePost(req, res, next) {

// };