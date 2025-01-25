const mongoose = require('mongoose');


const loginschema=new mongoose.Schema(
    {
         name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        phoneno:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

const Login= new mongoose.model("admin",loginschema);
module.exports=Login;

