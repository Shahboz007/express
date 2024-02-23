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
    const newUser = await pool.query(
      `
            INSERT INTO user_info (username, age) 
            VALUES ($1, $2) RETURNING *
        `,
      [req.body.username, req.body.age]
    );
    console.log(newUser);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAddUsersPage,
  addNewUser,
};
