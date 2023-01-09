const express = require("express");
const router = express.Router();
const passport = require('../config/passport')
const attendController = require("../controllers/attendance-controller");
const userController = require('../controllers/user-controller') 
const { generalErrorHandler } = require('../middleware/error-handler')
const { authenticated } = require('../middleware/auth') 
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn) // 注意是 post
router.get('/logout', userController.logout)
router.get("/attendance", authenticated, attendController.getAttendance);
router.use("/", (req, res) => res.redirect("/attendance"));
router.use('/', generalErrorHandler)

module.exports = router;
