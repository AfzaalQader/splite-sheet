const UserModel = require('../../models/user.model');
const success_response = require('../../public/javascripts/response/success.response.json');
var success_200 = success_response.success_200;

const controller = {}

controller.getAllUsers = async (req, res) => {
    const resData = await UserModel.findAll();
    success_200.message = "Get all users ";
    success_200.data.items = resData;
    res.send(success_200);
}

controller.getUser =async (req, res) => {
    const id = req.params.id;
    const resData = await UserModel.findAll({
        where: {
            id: id
        }
    });
    success_200.message = "get single user data";
    success_200.data.items = resData;
    res.send(success_200);
}

controller.createUser =async (req, res) => {
    console.log("Create method called");
    const resData = await UserModel.create(req.body);
    success_200.message = "New user create successfully";
    success_200.data.items = resData;
    res.send(success_200);
}

module.exports = controller;