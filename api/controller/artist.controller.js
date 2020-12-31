const ArtistModel = require('../../models/artist.model');

const Controller = {};

Controller.getAllArtist = (req, res) => {
    res.send("Get All Artist is Called");
}

module.exports = Controller;