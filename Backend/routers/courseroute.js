const express = require("express");
const CourseController = require("../controllers/coursecontroller");
const route = express.Router();

route.get("/", CourseController.get);
route.get("/:id", CourseController.getById);
route.post("/", CourseController.add);
route.delete("/:id", CourseController.del);
route.put("/:id", CourseController.update)

module.exports = route;