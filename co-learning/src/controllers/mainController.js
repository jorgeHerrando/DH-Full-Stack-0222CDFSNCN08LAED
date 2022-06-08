const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../database/users.json");
const productsFilePath = path.join(__dirname, "../database/products.json");

const readUsers = () => {
  const users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  return users;
};

const readProducts = () => {
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf8"));
  return products;
};

const mainController = {
  index: function (req, res, next) {
    const products = readProducts();
    const users = readUsers();
    // const usersToSend = users.map((user) => user.name);
    // console.log(users, usersToSend);

    res.render("index", { title: "Express", products: products, users: users });
  },
};

module.exports = mainController;
