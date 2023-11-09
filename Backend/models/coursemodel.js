const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  shortName: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
  }
},{
    timestamps: true
});

const CourseModel = mongoose.model("course", CourseSchema) 
module.exports = CourseModel
