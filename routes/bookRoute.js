const express = require('express');
const authController = require('../controllers/authController')
const BookingController = require('../controllers/bookingController')

const router = express.Router()


router.post('/booking',authController.protect, BookingController.createBooking)   
router.get('/booking', BookingController.getbook)    


module.exports = router;    