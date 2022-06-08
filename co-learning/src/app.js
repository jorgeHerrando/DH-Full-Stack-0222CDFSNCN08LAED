const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// Require the routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// For Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set Static Folder
app.use(express.static(path.join(__dirname, "../public")));

//-----------------------------------------------------------//
// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

//-----------------------------------------------------------//

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).render("./404", { title: "Not found" });
  next();
});

let mensaje = () => {
  console.log("Servidor funcionando en puerto 3001");
};

app.listen(3001, mensaje());

module.exports = app;
