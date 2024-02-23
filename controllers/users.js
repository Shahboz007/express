const uuid = require("uuid");
const User = require("../models/users");
const pool = require("../config/db");

// Route     /add-users
// Method    GET
// Descr     GET add-users page
const getAddUsersPage = (req, res) => {
  res.render("add-users", {
    title: "Add new user",
  });
};

// Route     /users
// Method    POST
// Descr     add new user
const addNewUser = async (req, res) => {
  try {
    const newUser = await new User(req.body.username, req.body.age);
    newUser.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Route     /users/edit/:id
// Method    GET
// Descr     edit user
const updatePageUser = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM user_info WHERE id = $1", [
      req.params.id,
    ]);

    res.render("edit-user", {
      title: "Edit page",
      user: user.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

// Route     /users/edit/:id
// Method    POST
// Descr     edit user
const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      req.body.username,
      req.body.age
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Route     /users/delete/:id
// Method    DELETE
// Descr     delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAddUsersPage,
  addNewUser,
  updatePageUser,
  updateUser,
  deleteUser,
};
