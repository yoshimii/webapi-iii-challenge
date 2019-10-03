const express = require('express');

// import middleware
const {
    validateUserId,
    validateUser
} = require('../middleware/validate-middleware')

//import userDb module to use user methods
const User = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {
    userData = req.body;
    User.insert(userData).then(user => {
        res.status(201).json(user);
    })
});


router.get('/', (req, res) => {
    User.get().then(users => {
        res.status(200).json(users);
    })
});

router.get('/:id', validateUserId, errorHandler, (req, res) => {
    res.status(200).json(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
    User.getUserPosts(id).then(posts => {
        res.status(200).json(posts)
    })
});
 
router.delete('/:id', validateUserId, (req, res) => {
    User.remove(id).then(post=> {
        res.status(204).json(post)
    })
});

router.put('/:id', validateUserId, (req, res) => {
    const id = req.params.id;
    User.update(id).then(post => {
        res.status(200).json(post)
    })
});


function errorHandler(errorCode, req, res, next) {
    res.status(errorCode).json({ error: 'Trouble processing request' })
}

module.exports = router;
