const express = require('express');
// import middleware
const validateUserId = require('../middleware/validate-middleware');
//import userDb module to use user methods
const User = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', validateUserId, (req, res) => {
    const id = req.params.id;
    User.getById(id).then(res => {
      res.status(201).json(res);
    })
});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {
    const id = req.params.id;
    User.getById(id).then(user => {
        res.status(200).json(user);
    })
});

router.get('/:id/posts', validateUserId, (req, res) => {

});
 
router.delete('/:id', validateUserId, (req, res) => {
// 
});

router.put('/:id', (req, res) => {

});


module.exports = router;
