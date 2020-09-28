const express = require("express");
const router = express.Router();
const cityController = require('../controllers/cityController')
router.get('',cityController.all)
module.exports= router ;