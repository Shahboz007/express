const express = require("express");
const router = express.Router();

const path = require('path')

router.get("/add-users", (req, res) => {
  res.sendFile(path.join(__dirname,'..','views','add-users.html'));
});

router.get("/delete-users", (req, res) => {
  res.send(`
    <h1>Delete users</h1>
  `);
});

router.post("/users", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
