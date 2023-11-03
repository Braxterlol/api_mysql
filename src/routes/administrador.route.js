const express = require("express");
const productosRoute = express.Router();
const protegerRutas = require('../middlewares/protegerRutas');
const {
  obtenerProductos,
  obtenerProducto,
  ingresarProducto,
  actualizarProducto,
  eliminarProducto
} = require("../controllers/administrador.controller");

productosRoute.get("/productos", protegerRutas, obtenerProductos);
productosRoute.get("/productos/:productoId", protegerRutas, obtenerProducto);
productosRoute.post("/productos", protegerRutas, ingresarProducto);
productosRoute.put("/productos/:productoId", protegerRutas, actualizarProducto);
productosRoute.delete("/productos/:productoId", protegerRutas, eliminarProducto);

module.exports = productosRoute;
