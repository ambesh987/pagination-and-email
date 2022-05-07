const express = require("express");
const userController = require("../Controllers/users");

const Router = express.Router();

Router.route("/register").post(userController.Register);
Router.route("/").get(userController.AllUser);

module.exports = Router;