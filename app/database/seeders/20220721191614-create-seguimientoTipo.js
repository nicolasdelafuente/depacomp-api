'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Entrevista' },
        { nombre: 'Contacto Por email-Telefono' },
        { nombre: 'Entrevista con docentes' },
      ];

      return queryInterface.bulkInsert('seguimientos_tipo', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('seguimientos_tipo', null, {});
    
  }
};
