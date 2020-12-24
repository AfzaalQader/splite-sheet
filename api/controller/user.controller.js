const userModel = require('../../models/user.model');
const controller = {}

controller.getAllUsers = (req, res) => {
    res.send("get all users");
}

controller.getUser = (req, res) => {
    // const resData = userModel.findAll();
    res.send("get a user");
}

module.exports = controller;