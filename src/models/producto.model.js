const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const productoSchema = sequelize.define("productos", {
    productoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2), // Asumiendo 2 decimales para el precio
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('a', 'b'), // El tipo es 'a' o 'b'
        allowNull: false,
    },
}, {
    timestamps: false, // Desactiva la creación automática de campos createdAt y updatedAt
});

sequelize.sync()
    .then(() => {
        console.log('Modelo de productos sincronizado con la base de datos');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo de productos:', error);
    });

module.exports = productoSchema;
