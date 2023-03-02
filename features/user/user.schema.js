const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    Name : {  type:String } ,
    level: {  type:String},
    score: {  type:Number }
})
const User = mongoose.model("user", userSchema);
module.exports = User ;