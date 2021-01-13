const AlbumModel = require('../../models/album.model');
const SongModel = require('../../models/song.model');

const Controller = {};

Controller.getAllAlbum = async (req, res) => {
    // const resData = await AlbumModel.findAll();
    const resData = await AlbumModel.findOne({
        include: SongModel
    });
    res.send(resData);
}

Controller.create = async (req, res) => {
    let resData = await AlbumModel.create(req.body);
    res.send(resData);
}

module.exports = Controller;