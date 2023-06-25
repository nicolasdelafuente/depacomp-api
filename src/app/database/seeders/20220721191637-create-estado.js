'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Ausente',              color: 'rgba(242,153,74,0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Citado',               color: 'rgba(86,204,242,0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Contactar',            color: 'rgba(242,201,76,0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'En proceso',           color: 'rgba(39,174,96, 0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Espera de Respuesta',  color: 'rgba(235,87,87,0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Realizado',            color: 'rgba(47,128,237,0.7)', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Sin Estado',           color: 'rgba(189,189,189,0.7)', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('Estados', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Estados', null, {});
    
  }
};


/*

INSERT INTO estados (estado_tipo, color) VALUES ('Ausente','rgba(242, 153, 74, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Citado', 'rgba(86,204,242,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Contactar','rgba(242,201,76,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('En proceso','rgba(39, 174, 96, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Espera de Respuesta', 'rgba(235,87,87,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Realizado','rgba(47, 128, 237, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Sin Estado','rgba(189,189,189,0.7)');

*/