const express = require('express');
require('../../server/boot/db.connection');
const ArtistController = require('../controller/artist.controller');
const router = express.Router();

router.get('/', ArtistController.getAllArtist);
router.post('/', ArtistController.create);

module.exports = router;