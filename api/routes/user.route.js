const express = require('express');
require('../../server/boot/db.connection');
const userController = require('../controller/user.controller');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;