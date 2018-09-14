const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://koovie:passw0rd@ds155252.mlab.com:55252/assesment-app"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("You are now connected to mongoose");
});

const Buyer = new mongoose.Schema({
  userName: String,
  purchaseName: String,
  password: String
});

module.exports = mongoose.model("Buyer", Buyer);
