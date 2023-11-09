const express = require("express")
const route = express.Router()
const AuthController = require("../controllers/authcontroller")

route.post("/signup", AuthController.signup);
route.post("/login", AuthController.login);


module.exports = route