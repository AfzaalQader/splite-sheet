const SongModel = require('../../models/song.model');

const Controller = {};

Controller.getAllSong = (req, res) => {
    res.send("Get All Song is Called!");
}

module.exports = Controller;