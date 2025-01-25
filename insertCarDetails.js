const mongoose = require('mongoose');
const CarDetails = require('./model/car-details'); // Adjust the path if necessary
require('dotenv').config();

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
    // Sample car details data
    const carDetailsData = [
        {
            src: "./build/Images/cars/amaze.jpg",
            carname: "Honda Amaze",
            rate: 30,
            type: "Sedan",
            ownername: "John Doe",
            carnumber: "ABC123"
        },
        {
            src: "./build/Images/cars/bolero.jpg",
            carname: "Bolero",
            rate: 35,
            type: "SUV",
            ownername: "Jane Smith",
            carnumber: "XYZ456"
        },
        {
            src: "./build/Images/cars/fortuner.jpg",
            carname: "Fortuner",
            rate: 50,
            type: "SUV",
            ownername: "Mike Johnson",
            carnumber: "LMN789"
        },
        {
            src: "./build/Images/cars/innova.jpg",
            carname: "Innova",
            rate: 60,
            type: "SUV",
            ownername: "Emily Davis",
            carnumber: "OPQ012"
        },
        {
            src: "./build/Images/cars/swift.jpg",
            carname: "Swift",
            rate: 70,
            type: "Hatchback",
            ownername: "Sarah Wilson",
            carnumber: "RST345"
        },
        {
            src: "./build/Images/cars/thar.jpg",
            carname: "Mahindra Thar",
            rate: 70,
            type: "SUV",
            ownername: "Sarah Wilson",
            carnumber: "RST365"
        },
        {
            src: "./build/Images/cars/verna.jpg",
            carname: "Hyundai Verna",
            rate: 70,
            type: "Sedan",
            ownername: "Sarah Wilson",
            carnumber: "RST765"
        },
        {
            src: "./build/Images/cars/xuv.jpg",
            carname: "Mahindra XUV",   
            rate: 70,
            type: "SUV",
            ownername: "Sarah Wilson",
            carnumber: "RST380"
        }
    ];

    // Insert car details data
    CarDetails.insertMany(carDetailsData)
    .then(() => {
        console.log("Car details inserted successfully");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Error inserting car details:", err);
        mongoose.connection.close();
    });