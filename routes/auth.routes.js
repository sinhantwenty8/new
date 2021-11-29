const express = require("express")

const authController = require('../controllers/auth.controller')

const router = express.Router()

router.get('/signup',authController.getSignUp)
router.get('/signin',authController.getSignIn)
router.post('/signup',authController.signUp)
router.get('/login',authController.getLogin)

module.exports = router;