const express = require('express');
const routes = express.Router();

const users = require('./controllers/Users')
const create = require('./controllers/Users')

routes.post('/users/login', users.login);
routes.post('/users', users.createUser);
routes.get('/users', users.getAll);

module.exports = routes;