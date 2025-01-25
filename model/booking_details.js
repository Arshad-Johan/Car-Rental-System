
const mongoose = require('mongoose');

const bookingdetailsschema=new mongoose.Schema(
    {
        firstname:String ,
        lastname:String ,
        email:String ,
        phoneno:Number ,
        passengercount:Number ,
        pickupdate:Date ,
        dropoffdate:Date ,
        days:String,
        price:String,
        userid:{
             type: mongoose.Schema.Types.ObjectId,
             ref:'login-details'
        },
        carid:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'cars-details'
        }
    },{
        timestamps:true
    }
)

const bookingdetails= new mongoose.model("Booking-details",bookingdetailsschema);
module.exports=bookingdetails;