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
        type: Sequelize.STRING.BINARY
      },
      orientador_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      // Se agrega para que se pueda hacer la migracion desde npx (npx sequelize-cli db:seed:all)
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categorias',
          key: 'id',
          as: 'categoria_Id',
        }
      },
      estado_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Estados',
          key: 'id',
          as: 'estado_Id',
        }
      },
      seguimiento_tipo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Seguimientotipos',
          key: 'id',
          as: 'seguimientotipo_id',
        }
      },
      entrevistador_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'personas',
          key: 'id',
          as: 'entrevistador_id',
        }
      },
      derivador_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'personas',
          key: 'id',
          as: 'derivador_id',
        }
      },
      entrevistado_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'personas',
          key: 'id',
          as: 'entrevistado_id',
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