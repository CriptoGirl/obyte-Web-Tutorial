// obyte Integration Tutorial

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
const home = require('../routes/home');
const tutorial = require('../routes/tutorial');
const postDAG = require('../routes/postDAG');
const searchDAG = require('../routes/searchDAG');

app.use(express.static('resources')); //This will allow express to access any file in that folder

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home);
app.use('/home', home);
app.use('/tutorial', tutorial);
app.use('/postDAG', postDAG);
app.use('/searchDAG', searchDAG);

module.exports = app;
