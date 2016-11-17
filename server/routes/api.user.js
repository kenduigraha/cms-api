const express = require('express');
const router = express.Router();

const controller = require('../controllers/api.user')

// register user
router.post('/', controller.newuser);

// login user
router.post('/login', controller.loginUser);

// seed user
router.post('/seed', controller.seedUser);

// delete all user
router.delete('/deleteall', controller.deleteAllUser);

module.exports = router;
