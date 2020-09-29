const express = require('express');
const router = express.Router();
const viewController = require ('../controllers/viewController');
const authController = require ('../controllers/authController')



//router.route("/login").get(viewController.login);
router.get("/signup", viewController.signup);

module.exports = router;