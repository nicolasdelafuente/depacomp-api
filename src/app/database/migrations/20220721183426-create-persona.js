'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefono: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      documento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // Se agrega para que se pueda hacer la migracion desde npx (npx sequelize-cli db:seed:all)
     rol_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Roles',
          key: 'id',
          as: 'rol_id',
        }
      }, 
      genero_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Generos',
          key: 'id',
          as: 'genero_id',
        }
      }, 
      documento_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'DocumentoTipos',
          key: 'id',
          as: 'documento_id',
        }
      }, 
      localidad_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Localidades',
          key: 'id',
          as: 'localidad_id',
        }
      }, 
      provincia_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Provincias',
          key: 'id',
          as: 'provincia_id',
        }
      },
      pais_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Paises',
          key: 'id',
          as: 'pais_id',
        }
      },
      carrera_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'Carreras',
          key: 'id',
          as: 'carrera_id',
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
    return queryInterface.dropTable('Personas');
  }
};