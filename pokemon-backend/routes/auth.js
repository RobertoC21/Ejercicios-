const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');


//registro 
router.post(
    '/register',
    [
        body('nombre').notEmpty().withMessage('el nombre es requirido '),
        body('email').isEmail().withMessage('Email invalido '),
        body('password').isLength({min:6}).withMessage('Minimo 6 caracteres ')
    ],
authController.register

);


//login
router.post('/login', authController.login);

module.exports = router;