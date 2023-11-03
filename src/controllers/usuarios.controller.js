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

const obtenerProductosPorTipo = async (req, res) => {
  try {
    const tipo = req.params.tipo;

    const productos = await Producto.findAll({
      where: { tipo },
      attributes: ['productoId', 'nombre', 'precio', 'tipo'],
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

module.exports = {
  obtenerProductos,
  obtenerProductosPorTipo,
  obtenerProducto,
};
