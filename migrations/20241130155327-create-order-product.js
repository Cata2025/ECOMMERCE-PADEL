'use strict';
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderProducts', {
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders', // Tabla de origen
          key: 'id', // Campo de la tabla de origen
        },
        onDelete: 'CASCADE', // Eliminar las filas asociadas cuando se elimina una orden
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products', // Tabla de origen
          key: 'id', // Campo de la tabla de origen
        },
        onDelete: 'CASCADE', // Eliminar las filas asociadas cuando se elimina un producto
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderProducts');
  },
};