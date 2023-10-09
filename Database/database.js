const Sequelize = require("sequelize");
const connection = new Sequelize("occup_health", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;