const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../database/users.json");

const readUsers = () => {
  const users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  return users;
};

const usersController = {
  all: function (req, res) {
    const users = readUsers();
    res.render("users", { title: "Users", users: users });
  },
};

module.exports = usersController;
