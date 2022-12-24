const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("The Email entered is not valid!");
            };
        }
    },
    phone : {
        type : Number,
        required : true,
        unique : true,
        min : 10
    },
    message : {
        type : String,
        required : true,
        minlength : 3
    }
});

const User = new mongoose.model("User" , userSchema);

module.exports = User;