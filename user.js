const mongoose = require('mongoose');
const { string } = require('zod');

const userSchema = new mongoose.Schema({
    name: string,
     username: { type: String, unique: true },
     gender:string,
     email:{type:string,unique: true},
     mobile.no: string,
     address:{
        Building/Flore:string,
        landmark:string,
        optional landmark:string,
        pincode:string,
     }
     Password:string;
});
module.export=mongoose.module('user',userSchema);