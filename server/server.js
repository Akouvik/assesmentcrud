const express = require("express");
const app = express();
const PORT = 3002;
const path = require("path");
const bodyParser = require("body-parser");
const Controller = require("./Controller");
app.set("view engine", "ejs");

app.use(bodyParser.json());

app.get("/", function(req, res) {
  // var drinks = [
  //   // {name:req.body.name,password:req.body.password}
  //   { name: "Bloddy Mary", drunkness: 5 },
  //   { name: "Martini", drunkness: 3 },
  //   { name: "scotch", drunkness: 9 }
  // ];
  let backResult = { name: req.body.name, password: req.body.password };
  var tagline = "Any code of your own that you haven't looked at";

  res.render("../views/login", {
    backResult: backResult
    // tagline: tagline
  });
});

app.get("/getABuyer", (req, res) => {
  res.render("../views/index");
});

// app.use(express.static(path.join(__dirname, "../client/src")));

app.listen(PORT, () => {
  console.log("server started up at port 3002");
});
