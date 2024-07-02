const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.mongo_url || 'mongodb://localhost:27017/mern-portofolio' );


const connection= mongoose.connection;


connection.on("error", ()=>{
    console.log("error connecting to database");
});


connection.on("connected", ()=>{
    console.log("mongo DB connection succesfull"); 
});

module.exports = mongoose;