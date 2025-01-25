const mongoose = require('mongoose');



const carchema=new mongoose.Schema(
    {
        src:String,
        carname:String,
        rate:Number,
        type:String,
        ownername:String,
        carnumber:String
    },{
        timestamps:true
    }
)

const Car_details= new mongoose.model("Cars-details",carchema);
module.exports=Car_details;