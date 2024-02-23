const pool = require("../config/db");

module.exports = class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  save() {
    let users = [];

    fs.readFile(pathToFile, "utf8", (err, data) => {
      if (err) throw err;
      users = JSON.parse(data);
      users.push({
        username: this.username,
        age: this.age,
        uid: this.uid,
      });

      fs.writeFile(pathToFile, JSON.stringify(users), (err) => {
        if (err) throw err;
      });
    });
  }

  static async findAll() {
    const users = await pool.query("SELECT * FROM user_info");
    return users.rows;
  }

  static async findByUid(id) {
    const user = await pool.query("SELECT * FROM user_info WHERE id = $1", [
      id,
    ]);

    return user.rows[0]
  }
};
