const { request, response } = require('express');
const connection = require('../database/connection');

const getAll = async (request, response) => {
    const result = await connection('products').select('*');

    return response.json(result)
}

module.exports = {
    getAll
}