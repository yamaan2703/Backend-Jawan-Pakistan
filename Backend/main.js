// console.log("hello");

// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// fs.readFile("./abc.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("./abc.txt", "anas", () => {
//   console.log("data change");
// });

// //// path ////

// console.log(__dirname);
// console.log(__filename);

// const arr = ["english", "math", "physics"];

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     console.log("done");
//     res.write(JSON.stringify(arr));
//   }
// });
// res.end();
// server.listen(3000);

///// Express  ////

// const express = require("express");

// const App = express();

// App.get("/courses", (req, res) => {
//   res.send(arr);
// });

// App.listen(5000, () => {
//   console.log("server is running");
// });

// const express = require("express");
// require("dotenv").config();

// const App = express();
// App.use(express.json());

// const courses = [
//   {
//     id: 1,
//     courseName: "Graphic Design 101",
//     type: "Graphic Design",
//   },
//   {
//     id: 2,
//     courseName: "Web Development Fundamentals",
//     type: "Programming Language",
//   },
//   {
//     id: 3,
//     courseName: "Advanced Photoshop Techniques",
//     type: "Graphic Design",
//   },
//   {
//     id: 4,
//     courseName: "JavaScript Programming",
//     type: "Programming Language",
//   },
//   {
//     id: 5,
//     courseName: "Digital Illustration Masterclass",
//     type: "Graphic Design",
//   },
//   {
//     id: 6,
//     courseName: "Python for Data Science",
//     type: "Programming Language",
//   },
// ];

// App.get("/courses", (req, res) => {
//   res.send(courses);
// });

// App.get("/courses/:id", (req, res) => {
//   let id = req.params.id;

//   if (obj) {
//     res.send({
//       isSuccessful: true,
//       data: obj,
//       message: "",
//     });
//   } else {
//     res.send({
//       isSuccessful: true,
//       data: null,
//       message: "no data found",
//     });
//   }
// });

// App.post("/courses/:id", (req, res) => {
//   let { name, passward } = req.body;
//   let obj = { name, passward };
//   let errorArray = [];

//   if (!obj.name) {
//     errorArray.push("required name");
//   }
//   if (!obj.passward) {
//     errorArray.push("required passward");
//   }

//   if (errorArray.length > 0) {
//     res.send({
//       isSuccessful: false,
//       data: errorArray,
//       message: "validation error",
//     });
//   } else {
//     res.send({
//       isSuccessful: false,
//       data: obj,
//       message: "",
//     });
//   }
// });

// App.put("/courses/:id", (req, res) => {
//   let { name, passward } = req.body;
//   let obj = { name, passward };

//   if (obj) {
//     res.send({
//       isSuccessful: false,
//       data: obj,
//       message: "updated",
//     });
//   } else {
//     res.send({
//       isSuccessful: false,
//       message: "not update",
//       data: "",
//     });
//   }
// });

// App.delete("/courses/:id", (req, res) => {
//   let id = req.params.id;
//   let obj = courses.find((x) => x.id == id);

//   if (obj) {
//     res.send({
//       data: obj,
//       message: "delete",
//       isSuccessful: false,
//     });
//   } else {
//     res.send({
//       data: obj,
//       message: "",
//       isSuccessful: false,
//     });
//   }
// });

// App.listen(process.env.PORT, () => {
//   console.log(`running httpp://localhost:${process.env.PORT}`);
// });
