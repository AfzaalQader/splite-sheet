const express = require('express');
require('../../server/boot/db.connection');
const SongController = require('../controller/song.controller');
const router = express.Router();

router.get('/', SongController.getAllSong);
router.post('/', SongController.create);

module.exports = router;