const DB = require('../server/boot/db.connection');
const {
    DataTypes
} = require('sequelize');

const Artist = DB.define('artist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Band: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define Relationship with others table

module.exports = Artist;