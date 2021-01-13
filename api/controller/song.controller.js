const SongModel = require('../../models/song.model');

const Controller = {};

Controller.getAllSong = async (req, res) => {
   const resData = await SongModel.findAll();
   res.send(resData);
}

Controller.create = async (req, res) => {
   let resData = await SongModel.create(req.body);
   res.send(resData);
}

module.exports = Controller;