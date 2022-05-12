const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var portNum = "3050";
var router = express.Router();

mongoose.connect(
  "mongodb+srv://selcuk:1234@cluster0.kmbgx.mongodb.net/user-app?retryWrites=true&w=majority"
);

router.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.use(
  cors({
    origin: "*",
  })
);

// router'ı aktive edelim.
app.use("/", router);

// START THE SERVER
// =============================================================================
app.listen(portNum);
