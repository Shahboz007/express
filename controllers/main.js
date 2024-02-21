const { users } = require("./users");
// Route     /
// Method    GET
// Descr     GET main page
const getMainPage = (req, res) => {
  res.render("main", {
    title: "Users list",
    users,
  });
};

module.exports = {
  getMainPage,
};
