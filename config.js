require('dotenv').config()
const Sequelize = require('sequelize');
new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`);

module.exports = sequelize;
