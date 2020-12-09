const express = require('express');
const routes = express.Router();

const users = require('./controllers/Users')

routes.post('/users/login', users.login);

module.exports = routes;