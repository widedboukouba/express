const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use("/user", require("./routes/user"));
//app.get("/first", (req, res) => res.send("hello"));

app.listen(5004, (err) =>
  err ? console.log(err) : console.log("server is running")
);
