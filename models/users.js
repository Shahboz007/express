const pool = require("../config/db");

module.exports = class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  async save() {
    await pool.query(
      `
              INSERT INTO user_info (username, age) 
              VALUES ($1, $2) RETURNING *
          `,
      [this.username, this.age]
    );
  }

  static async findAll() {
    const users = await pool.query("SELECT * FROM user_info");
    return users.rows;
  }

  static async findByUid(id) {
    const user = await pool.query("SELECT * FROM user_info WHERE id = $1", [
      id,
    ]);

    return user.rows[0];
  }
};
