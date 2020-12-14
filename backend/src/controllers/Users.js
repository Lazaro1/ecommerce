const { request, response } = require('express');
const connection = require('../database/connection');

const login = async (request, response) => {
    const { email, password } = request.body;

    const result = await connection('users')
        .where({
            email: email,
            password: password
        })
        .select('*')
        .first();

    if (result)
        return response.json(true)
    else
        return response.json(false);
}

const createusers = async (request, response) => {
    try {
        const register = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        };

        const result = await connection('users').insert(register)

        if (result) {
            return response.json(true)
        } else {
            return response.json(false)
        }
            

    } catch (error) {
        return response.json({ error: error.message });
    }
}


module.exports = {
    login,
    createusers
}