const express = require("express");
const app = express();
const PORT = 3002;
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Controller = require("./Controller.js");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", function(req, res) {
  res.render("../views/login", {});
});
app.post("/index", Controller.getBuyer);
app.get("/try", Controller.deleteAll);

app.listen(PORT, () => {
  console.log("server started up at port 3002");
});
