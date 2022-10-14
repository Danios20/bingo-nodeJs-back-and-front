const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const mongodb = 'mongodb://localhost/bingo';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then(() => console.log(`MongoDB connected to ${mongodb}`))
    .catch(err => {throw err, console.log('err :>> ', err);} );

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(`${__dirname}/public`)));
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "pug")



app.use('/login', require('./routes/login'));
app.use('/game', require('./routes/users'));



module.exports = app;