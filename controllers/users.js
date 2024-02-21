// Route     /add-users
// Method    GET

const User = require("../models/users");

// Descr     GET add-users page
const getAddUsersPage = (req, res) => {
  res.render("add-users", {
    title: "Add new user",
  });
};

// Route     /users
// Method    POST
// Descr     add new user
const addNewUser = (req, res) => {
  const users = new User(req.body.username, req.body.age);
  users.save()
  res.redirect("/");
};

module.exports = {
  getAddUsersPage,
  addNewUser,
};
