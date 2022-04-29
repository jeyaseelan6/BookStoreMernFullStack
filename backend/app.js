const express = require('express');
const mongoose = require('mongoose');
const router = require("../routes/book-routes");


const app = express();

// Not needed
// //middleware
// app.use('/',(req,res,next)=>{
//     res.send("This is our starting app");
// })


mongoose.connect("mongodb+srv://admin:UbP1dH9ucSO3SGf7@cluster0.da8fs.mongodb.net/Book-Store?retryWrites=true&w=majority")
.then(()=>console.log('Connected to Database'))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));








