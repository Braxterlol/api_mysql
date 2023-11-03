const Producto = require('../models/producto.model');

const obtenerProductos = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const productos = await Producto.findAll({
      attributes: ['productoId', 'nombre', 'precio', 'tipo'],
      limit: perPage,
      offset: (page - 1) * perPage,
    });

    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerProducto = async (req, res) => {
  const { productoId } = req.params;
  try {
    const producto = await Producto.findByPk(productoId);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ingresarProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarProducto = async (req, res) => {
  const { productoId } = req.params;
  try {
    const [actualizado] = await Producto.update(req.body, { where: { productoId } });
    if (actualizado) {
      res.json({ mensaje: 'Producto actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminarProducto = async (req, res) => {
  const { productoId } = req.params;
  try {
    const eliminado = await Producto.destroy({ where: { productoId } });
    if (eliminado) {
      res.json({ mensaje: 'Producto eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProducto,
  ingresarProducto,
  actualizarProducto,
  eliminarProducto,
};
