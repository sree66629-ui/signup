const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        awite  mongoose = connectDB (process.env.MONGO_URL);
        console.log(moduleongoose.Connected);
    } catch (error){
        console.log(error.message);
    };
    }
    module export(console.error);
