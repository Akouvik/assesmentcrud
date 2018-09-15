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
  createBuyer: (req, res) => {
    const buyer = new Buyer({
      name: req.body.name,
      password: req.body.password
    });

    buyer.save((err, data) => {
      if (err) {
        res.send("problem adding user to database");
      } else {
        //set cookie after saving the user to the database
        let randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2, randomNumber.length);
        res.cookie("buyerCookie", randomNumber, {
          maxage: 900000,
          httpOnly: true
        });
        console.log("buyer cookie is set");

        res.status(200).send(data);
      }
    });
  },
  getBuyer: (req, res) => {
    const { name, password } = req.body;
    Buyer.findOne({ name }, (err, data) => {
      if (err) return res.status(500).send(err);
      if (!data) return res.status(500).send("database did not find person");
      return res.status(200).render("../views/index");
    });
  },
  deleteBuyer: (req, res) => {
    Buyer.deleteOne({ name: req.body.name }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send("buyer deleted");
      }
    });
  },
  deleteAll: (req, res) => {
    Buyer.remove({}, (err, data) => {
      if (err) {
        console.log("res.");
        res.send(err);
      } else {
        res.status(200).send("all data removed");
      }
    });
  },
  updateMessage: (req, res) => {
    const { name } = req.body.name;
    Buyer.findOneAndUpdate();
  }
};

module.exports = Controller;
