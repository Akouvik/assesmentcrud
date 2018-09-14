const Buyer = require("./Model");

const Controller = {
  getAllBuyers: (req, res) => {
    Buyer.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  checkForBuyer: (req, res) => {
    Buyer.findOne({ name: "daga" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  createBuyer: (req, res) => {
    console.log(req.body);

    Buyer.create(
      {
        name: req.body.name,
        purchaseName: "Sandwich",
        password: req.body.password
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  },
  getBuyer: (req, res) => {
    Buyer.findOne({ name: "daga" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  deleteBuyer: (req, res) => {
    Buyer.deleteOne({ name: "daga" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send("buyer deleted");
      }
    });
  }
};

module.exports = Controller;
