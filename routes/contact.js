const express = require('express');
const router = express.Router();

// Route to render the About page
router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;
