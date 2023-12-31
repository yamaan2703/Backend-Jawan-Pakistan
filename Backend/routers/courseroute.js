const express = require("express");
const CourseController = require("../controllers/coursecontroller");
const AuthController = require("../controllers/authcontroller");
const route = express.Router();

route.get("/" , AuthController.protected, CourseController.get);
route.get("/:id", CourseController.getById);
route.post("/", CourseController.add);
route.delete("/:id", CourseController.del);
route.put("/update/:id", CourseController.update)

module.exports = route;