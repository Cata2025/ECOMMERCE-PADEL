'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Pala de pádel Pro',
        price: 150.00,
        description: 'Pala de pádel de alta calidad para jugadores avanzados.',
        categorie_id: 1, // Cambia este valor según tus categorías existentes
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Zapatillas de pádel',
        price: 80.00,
        description: 'Zapatillas con excelente agarre y comodidad.',
        categorie_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bolsa de deporte',
        price: 45.00,
        description: 'Bolsa para transportar equipamiento deportivo.',
        categorie_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camiseta técnica',
        price: 25.00,
        description: 'Camiseta diseñada para un óptimo rendimiento deportivo.',
        categorie_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Muñequeras',
        price: 10.00,
        description: 'Muñequeras absorbentes para mayor comodidad.',
        categorie_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
