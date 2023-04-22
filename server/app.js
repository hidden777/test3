const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sushensinha8:owZCDr5zUt1C7tQr@cluster0.0gd6nyh.mongodb.net/test');

const User = require('./Models/User')

app.get('/', (req, res)=>{
    res.send("HELLO WORLD!");
});

app.listen('3000', ()=>{
    console.log('server is running at port 3000');
});
// newUser();
// async function newUser(){
//     try{
//         const user = await User.create({name: "Kyle", email:"abcd123@gmail.com", phone:"9818723449", pass:"12345678"})
//         await user.save();
//         console.log(user);
//     }
//     catch (e){
//         console.log(e.message);
//     }
// }