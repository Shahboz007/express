const users = [];

// Route     /add-users
// Method    GET
// Descr     GET add-users page
const getAddUsersPage = (req, res) => {
  res.render("add-users", {
    title: "Add new user",
    users,
  });
};

// Route     /users
// Method    POST
// Descr     add new user
const addNewUser = (req, res) => {
  users.push({ username: req.body.username, age: req.body.age });
  res.redirect("/");
};

module.exports = {
  getAddUsersPage,
  addNewUser,
  users
}; 
