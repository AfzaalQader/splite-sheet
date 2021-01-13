const ArtistModel = require('../../models/artist.model');
const AlbumModel = require('../../models/album.model');

const Controller = {};

Controller.getAllArtist = async (req, res) => {
    // const resData = await ArtistModel.findAll();
    const resData = await ArtistModel.findAll({
        include: AlbumModel
    });
    res.send(resData);
}

Controller.create = async (req, res) => {
    let resData = await ArtistModel.create(req.body);
    res.send(resData);
}

module.exports = Controller;