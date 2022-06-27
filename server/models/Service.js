const { DataTypes} = require("sequelize");
const db = require('../config/db');

const Service = db.define('Service', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Service;
