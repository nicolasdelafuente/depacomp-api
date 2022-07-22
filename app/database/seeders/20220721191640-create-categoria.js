'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Discapacidad' },
        { nombre: 'Salud Mental' },
        { nombre: 'Salud Fisica' },
        { nombre: 'Tecnología' },
        { nombre: 'Pedagogía' },
        { nombre: 'Re-Orientación Vocacional' },
      ];

      return queryInterface.bulkInsert('categorias', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categorias', null, {});
    
  }
};
