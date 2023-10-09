const Sequelize =  require("sequelize");
const connection = require("../Database/database");

const login = connection.define('Login', {
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    senha: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
login.sync({force:false});
module.exports = login;