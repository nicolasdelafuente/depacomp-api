'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Buenos Aires', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Buenos Aires-GBA', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'CABA', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Catamarca', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Chaco', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Chubut', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Córdoba', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Corrientes', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Entre Ríos', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Formosa', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Jujuy', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'La Pampa', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'La Rioja', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mendoza', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Misiones', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Neuquén', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Río Negro', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Salta', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'San Juan', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'San Luis', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Santa Cruz', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Santa Fe', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Santiago del Estero', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tierra del Fuego', pais_id: 9, created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tucumán', pais_id: 9, created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('provincias', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('provincias', null, {});
    
  }
};
