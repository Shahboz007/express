const User = require("../models/users");
const pool = require("../config/db");

// Route     /
// Method    GET
// Descr     GET main page
const getMainPage = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("main", {
      title: "Users list",
      users: users,
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
    const user = await User.findByUid(req.params.id)

    res.render("user-page", {
      title: user.username,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMainPage,
  getUserPageByUid,
};
