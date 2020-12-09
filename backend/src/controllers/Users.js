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


module.exports = {
    login
}