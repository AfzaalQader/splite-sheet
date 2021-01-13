const express = require('express');
require('../../server/boot/db.connection');
const AlbumController = require('../controller/album.controller');
const router = express.Router();

router.get('/', AlbumController.getAllAlbum);
router.post('/', AlbumController.create);

module.exports = router;