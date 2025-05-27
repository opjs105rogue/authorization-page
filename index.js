const express = require('express');
const dotenv = require('dotenv');
const router = require('./userRout.js')
const mongoose = require('mongoose');

dotenv.config()

const PORT = process.env.PORT||5000;
const App = express();

App.use(express.json())
App.use('/',router);

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017')
        App.listen(PORT, ()=> {
            console.log(`Server is starting on port: ${PORT}`);
        })
    } catch(err) {
        console.log(err);
    }
}

start()