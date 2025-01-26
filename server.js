// filepath: /c:/Users/hp/Desktop/AI Drive/Car-Rental-System/server.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './build/views'));
app.use('/Images/', express.static(path.join(__dirname, './build/Images')));
app.use(express.urlencoded());
app.use(express.static(__dirname));

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/about'));
app.use('/', require('./routes/contact'));
app.use('/', require('./routes/book')); // Add this line

app.listen(port, () => {
    console.log('Server running at port', port);
});