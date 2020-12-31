const DB = require('../server/boot/db.connection');
const Artist = require('./artist.model');
const {
    DataTypes
} = require('sequelize');

const Album = DB.define('album', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.DATE,
    },
    label: {
        type:DataTypes.STRING
    }
});

// Define Relationship with others table
Artist.hasMany(Album);


module.exports = Album;