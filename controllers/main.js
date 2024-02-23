const User = require("../models/users");
const pool = require("../config/db");

// Route     /
// Method    GET
// Descr     GET main page
const getMainPage = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM user_info");

    console.log(users.rows);
    res.render("main", {
      title: "Users list",
      users: users.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

// Route     /:uid
// Method    GET
// Descr     Get user page by uid
const getUserPageByUid = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM user_info WHERE id = $1", [
      req.params.id,
    ]); 

    res.render("user-page", {
      title: user.rows[0].username,
      user: user.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMainPage,
  getUserPageByUid,
};
