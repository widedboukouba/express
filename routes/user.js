const express = require("express");
const userRouter = express.Router();
const users = require("../user");

//get user

userRouter.get("/", (req, res) => {

  const date = new Date();
  let hours = date.getHours();
  if (hours > 8 && hours < 18) {
    res.render("opened", { hours: hours });
  } else {
    res.render("closed");
  }
});

module.exports = userRouter;