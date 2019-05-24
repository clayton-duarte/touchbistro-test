const express = require('express');
const logger = require('morgan');
var cors = require('cors');


const indexRouter = require('./routes/index');

const api = express();

api.use(cors());
api.use(logger('dev'));
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use('/', indexRouter);

module.exports = api;
