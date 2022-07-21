'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Buenos Aires', pais_id: 9 },
        { nombre: 'Buenos Aires-GBA', pais_id: 9 },
        { nombre: 'CABA', pais_id: 9 },
        { nombre: 'Catamarca', pais_id: 9 },
        { nombre: 'Chaco', pais_id: 9 },
        { nombre: 'Chubut', pais_id: 9 },
        { nombre: 'Córdoba', pais_id: 9 },
        { nombre: 'Corrientes', pais_id: 9 },
        { nombre: 'Entre Ríos', pais_id: 9 },
        { nombre: 'Formosa', pais_id: 9 },
        { nombre: 'Jujuy', pais_id: 9 },
        { nombre: 'La Pampa', pais_id: 9 },
        { nombre: 'La Rioja', pais_id: 9 },
        { nombre: 'Mendoza', pais_id: 9 },
        { nombre: 'Misiones', pais_id: 9 },
        { nombre: 'Neuquén', pais_id: 9 },
        { nombre: 'Río Negro', pais_id: 9 },
        { nombre: 'Salta', pais_id: 9 },
        { nombre: 'San Juan', pais_id: 9 },
        { nombre: 'San Luis', pais_id: 9 },
        { nombre: 'Santa Cruz', pais_id: 9 },
        { nombre: 'Santa Fe', pais_id: 9 },
        { nombre: 'Santiago del Estero', pais_id: 9 },
        { nombre: 'Tierra del Fuego', pais_id: 9 },
        { nombre: 'Tucumán', pais_id: 9 },
      ];

      return queryInterface.bulkInsert('provincias', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('provincias', null, {});
    
  }
};
