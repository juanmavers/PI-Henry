const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;


const getTypesById = async (id) => {
    const url = `${API_URL}/types/${id}`;

    const response = await axios.get(`${API_URL}/type/${id}`);

    return response.data;
}

const getTypesByName = async (name) => {
    const url = `${API_URL}/types/${name}`;

    const response = await axios.get(`${API_URL}/type/${name}`);

    return response.data;
}

module.exports = {getTypesById, getTypesByName};