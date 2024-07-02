const express = require('express');


const app = express();
require("dotenv").config();
const dbconfig= require("./Config/dbconfig");
 const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server listining on port ${port}`)
});