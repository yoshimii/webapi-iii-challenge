const express = require('express');

// import middleware
const validateUserId = require('../middleware/validate-middleware');
const validateUser = require('../middleware/validate-middleware');

//import userDb module to use user methods
const User = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {
    userData = req.body;
    User.insert(userData).then(user => {
        res.status(201).json(user);
    })
});

router.post('/:id/posts', validateUserId, (req, res) => {
    // const id = req.params.id;
    // User.getById(id).then(res => {
    //   res.status(201).json(res);
    // })
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

});
 
router.delete('/:id', validateUserId, (req, res) => {
// 
});

router.put('/:id', (req, res) => {

});


function errorHandler(errorCode, req, res, next) {
    res.status(errorCode).json({ error: 'Trouble processing request' })
}

module.exports = router;
