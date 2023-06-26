'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Seguimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motivo: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      // Se agrega para que se pueda hacer la migracion desde npx (npx sequelize-cli db:seed:all)
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categorias',
          key: 'id',
          as: 'categoria_id',
        }
      },
      estado_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Estados',
          key: 'id',
          as: 'estado_id',
        }
      },
      seguimiento_tipo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'SeguimientoTipos',
          key: 'id',
          as: 'seguimiento_tipo_id',
        }
      },
      orientador_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      derivador_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Personas',
          key: 'id',
          as: 'derivador_id',
        }
      },
      orientado_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Personas',
          key: 'id',
          as: 'orientado_id',
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
    return queryInterface.dropTable('Seguimientos');
  }
};