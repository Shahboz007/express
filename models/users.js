const users = [];

module.exports = class User {
  constructor(uid, username, age) {
    this.username = username;
    this.age = age;
    this.uid = uid
  }

  save() {
    users.push({
      username: this.username,
      age: this.age,
      uid: this.uid
    });
  }

  static findAll(){
    return users;
  }
  
};
