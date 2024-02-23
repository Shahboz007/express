const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "../data/users.json");

module.exports = class User {
    constructor(uid, username, age) {
        this.username = username;
        this.age = age;
        this.uid = uid;
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

    static findAll() {
        const data = () => fs.readFileSync(pathToFile, "utf8");
        return JSON.parse(data());
    }

    static findByUid(uid) {
        const data = () => fs.readFileSync(pathToFile, "utf8");
        return JSON.parse(data()).find((item) => item.uid === uid);
    }
};
