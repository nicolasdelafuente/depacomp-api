'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = [
      {
        nombre: "zalocin",
        password: "1234",
        email: "zalocin@outlook.com",
        confirmado: true,
        token: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

     return queryInterface.bulkInsert('usuarios', data ,{});
  
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('usuarios', null, {});
  
  }
};
