'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entrevistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      observaciones: {
        allowNull: false,
        type: Sequelize.STRING
      },
      acciones: {
        type: Sequelize.STRING
      },
      // Se agrega para que se pueda hacer la migracion desde npx (npx sequelize-cli db:seed:all)
      seguimiento_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Seguimientos',
          key: 'id',
          as: 'seguimiento_id',
        }
      },
      orientador_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Personas',
          key: 'id',
          as: 'orientador_id',
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entrevistas');
  }
};