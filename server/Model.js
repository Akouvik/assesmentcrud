const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://koovie:passw0rd@ds155252.mlab.com:55252/assesment-app"
);
//visualizer
mongoose.set("debug", true);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("You are now connected to mongoose");
});

const Buyer = new mongoose.Schema({
  name: String,
  password: String,
  messages: Array
});

module.exports = mongoose.model("Buyer", Buyer);
