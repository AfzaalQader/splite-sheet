const AlbumModel = require('../../models/album.model');

const Controller = {};

Controller.getAllAlbum = async (req, res) => {
    res.send("Get All Album is called!");
}

module.exports = Controller;