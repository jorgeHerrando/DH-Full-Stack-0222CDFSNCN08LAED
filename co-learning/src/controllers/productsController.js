const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");

const readProducts = () => {
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf8"));
  return products;
};

const productsController = {
  all: function (req, res) {
    const products = readProducts();
    res.render("products", { title: "Products", products: products });
  },

  productDetail: (req, res) => {
    const id = req.params.id;
    const products = readProducts();
    const productToShow = products.find((product) => product.id == id);
    res.render("productDetail", {
      title: "Detalle de Producto",
      product: productToShow,
    });
  },

  createProductView: (req, res) => {
    res.render("createProduct", { title: "Crear Producto" });
  },

  store: (req, res) => {
    const products = readProducts();
    const newProduct = {
      id: products[products.length - 1].id + 1,
      //   ...req.body,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      type: req.body.type,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/products");
  },

  editProductView: (req, res) => {
    const id = req.params.id;
    const products = readProducts();
    const product = products.find((product) => product.id == id);
    res.render("editProduct", { title: "Editar producto", product: product });
  },

  editProduct: (req, res) => {
    const id = req.params.id;
    const products = readProducts();
    let product = products.find((product) => product.id == id);
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.type = req.body.type;
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect(`/products/${id}`);
  },

  delete: (req, res) => {
    const id = req.params.id;
    const products = readProducts();
    let productsSurvived = products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(productsSurvived, null, "\n")
    );
    res.redirect("/products");
  },
};

module.exports = productsController;
