const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// @route /api/users
router.route('/').post(registerUser);
// @route /api/users/login
router.route('/login').post(loginUser);

module.exports = router;