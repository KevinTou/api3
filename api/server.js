const express = require("express");

const productsRouter = require("../products/products-router");
const suppliersRouter = require("../suppliers/suppliers-router");

const server = express();

server.use("/products", productsRouter);
server.use("/suppliers", suppliersRouter);

server.get("/", (req, res) => {
  res.status(200).send({ api: "Up and running" });
});

// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers

server.get("/products", (req, res) => {});
server.get("/clients", (req, res) => {});
server.get("/suppliers", (req, res) => {});

module.exports = server;
