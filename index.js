const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

app.use[cors()];
app.use(express.json());
app.use(express.static("client/build"));

// mongoose connection
const connectDB = require("./connect");

const userModel = require("./user");

app.get("/video/:_id", function (req, res) {
  const { _id } = req.params;
  userModel.findById(_id).then((movies) => res.json(movies));
});

//login post
app.post("/login", async function (req, res) {
  try {
    const { login } = req.body;
    var email = login.email;
    var password = login.password;
    await userModel.find(
      { email: email, password: password },
      function (err, user) {
        if (err) {
          console.log(err);
          return res.status(500).send();
        }
        if (!user) {
          return res.status(404).send();
        }
        req.session.user = user;
        return res.status(200).send();
      }
    );
  } catch (error) {
    res.json("login fail" + error);
  }
});

// session
app.get("/home", function (req, res) {
  if (!req.session.user) {
    return res.status(401).send();
  }
  return res.status(200).send("Welcome to Super- secret API");
});

//add Video user post method
app.post("/adduser", async function (req, res) {
  try {
    const { newUser } = req.body;
    console.log(newUser);
    await userModel.create(newUser);
    res.json("User Added");
  } catch (error) {
    console.log(error);
    res.json("User failed to add");
  }
});

app.put("/addvideo/:_id", async function (req, res) {
  try {
    const { _id } = req.params;
    const { insertVideo } = req.body;
    const videoadd = await userModel.findByIdAndUpdate(_id, {
      $push: insertVideo,
    });

    return res.json({ full: videoadd });
  } catch (error) {
    console.log(error);
    res.json("User failed to add");
  }
});

app.listen(port, function () {
  connectDB();
  console.log("express is running");
});
