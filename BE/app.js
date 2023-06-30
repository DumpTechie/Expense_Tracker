const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const route = require("./src/controller/controler");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", route);
app.get("/", (req, res) => {
  const dao = require("./src/Dao/connect");
  res.send("hello world");
});

app.listen(3300, () => {
  console.log("lesting");
});
