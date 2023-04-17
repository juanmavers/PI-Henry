const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;

// const getTypesById = async (id) => {
//     const { id } = req.params;
//     await axios.get(`${API_URL}/type/${id}`)
//         .then(response => {
//             const { id } = response.data;
//             res.status(200).json({ id });
//         }).catch((error) => {
//             res.status(500).json({ error: error.message })
//         });
// };

// const getTypesByName = (req, res) => {
//     const { name } = req.params;
//     axios.get(`${API_URL}/type/${name}`)
//         .then(response => {
//             const { name } = response.data;
//             res.status(200).json({ name });
//         }).catch((error) => {
//             res.status(500).json({ error: error.message })
//         });
// };

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