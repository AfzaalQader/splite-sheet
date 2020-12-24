const UserModel = require('../../models/user.model');
const controller = {}

controller.getAllUsers = async (req, res) => {
    const resData = await UserModel.findAll();
    res.send(resData);
}

controller.getUser =async (req, res) => {
    const id = req.params.id;
    const resData = await UserModel.findAll({
        where: {
            id: id
        }
    });
    res.send(resData);
}

controller.createUser =async (req, res) => {
    console.log("Create method called");
    const resData = await UserModel.create(req.body);
    console.log(resData);
    res.send(resData);
}

module.exports = controller;