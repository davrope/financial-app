const _ = require('lodash');
const Path = require('path-parser');
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const {text, json} = require('express');

const FinanceUser = mongoose.model('finance');

module.exports = app=>{
    app.post()
}