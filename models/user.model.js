const DB = require('../server/boot/db.connection');
const {
    DataTypes
} = require('sequelize');

const User = DB.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    class: {
        type: DataTypes.STRING
    }
});


module.exports = User;