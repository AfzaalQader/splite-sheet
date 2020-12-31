const DB = require('../server/boot/db.connection');
const Album = require('./album.model');
const {
    DataTypes
} = require('sequelize');

const Song = DB.define('song', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    song: {
        type:DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME
    },
    composer: {
        type: DataTypes.STRING
    }
});

// Define Relationship with others table
Album.hasMany(Song);


module.exports = Song;