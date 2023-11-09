require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routers/courseroute");
const cors = require("cors")
// const authRoute = require("./routes/authroute");

const App = express();
App.use(express.json());
App.use(cors())

App.use("/course", courseRoute);
// App.use("/auth", authRoute);
// App.use("/user", userRoute);

mongoose
  .connect(process.env.DATA_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });