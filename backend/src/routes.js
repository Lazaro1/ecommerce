const express = require('express');
const routes = express.Router();

const users = require('./controllers/Users')
const products = require('./controllers/Products')

routes.post('/users/login', users.login);
routes.post('/users', users.createUser);
routes.get('/users', users.getAll);
routes.get('/products', products.returnProducts);

module.exports = routes;