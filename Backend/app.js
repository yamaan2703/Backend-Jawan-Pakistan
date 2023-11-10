require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routers/courseroute");
const cors = require("cors")
const authRoute = require("./routers/authroutes");
const bodyParser = require('body-parser')

const App = express();
App.use(express.json());
App.use(cors())
// support parsing of application/json type post data
App.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
App.use(bodyParser.urlencoded({ extended: true }));

App.use("/course", courseRoute);
App.use("/auth", authRoute);

mongoose
  .connect(process.env.DATA_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(`Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });