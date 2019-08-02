const express = require('express');
const app = express();
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pedals'
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => res.send ('app is running'));

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, ()=> {
    console.log('connected to mongo db')
});

app.listen(PORT, ()=> console.log('app is running'));
