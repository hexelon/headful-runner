require('dotenv').config()

const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', cors(), indexRouter);

module.exports = app;
