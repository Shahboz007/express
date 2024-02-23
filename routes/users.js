const express = require("express");
const router = express.Router();
const {
  getAddUsersPage,
  addNewUser,
  updatePageUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/add-users", getAddUsersPage);
router.get("/edit/:id", updatePageUser);
router.post("/edit/:id", updateUser);
router.post("/delete/:id", deleteUser);
router.post("/users", addNewUser);

exports.router = router;
