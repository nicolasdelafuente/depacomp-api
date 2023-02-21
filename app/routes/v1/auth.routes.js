const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthControllers');

// Login
router.post('/signin', AuthController.signIn);

// Registro
router.post('/signup', AuthController.signUp);

module.exports = router;