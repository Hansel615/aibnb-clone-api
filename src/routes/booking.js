const express = require("express");
const router = express.Router();
const bookingController = require('../controllers/bookingController')
router.get('/',bookingController.getReservations);
router.post('/book',bookingController.store);
router.post('/delete',bookingController.deleteReservation)
module.exports= router ;