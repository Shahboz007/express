const User = require('../models/users');

// Route     /
// Method    GET
// Descr     GET main page
const getMainPage = (req, res) => {
  const users = User.findAll()
  
  res.render("main", {
    title: "Users list",
    users
  });
};

module.exports = {
  getMainPage,
};
