const express = require('express');
const router = express.Router();
const viewController = require ('../controllers/viewController');
const authController = require ('../controllers/authController')



//router.route("/login").get(viewController.login);
router.get("/api/auth/signup", viewController.signup);
router.get("/api/auth/login", viewController.login);

module.exports = router;