const express = require('express');
const router = express.Router();
const Booking = require('../model/booking_details'); // Assuming you have a Booking model

router.post('/user/book', (req, res) => {
    const bookingData = req.body;

    // Save the data to the database or handle it as needed
    console.log('Booking Data:', bookingData);

    // Redirect to the home page
    res.redirect('/');
});

module.exports = router;
