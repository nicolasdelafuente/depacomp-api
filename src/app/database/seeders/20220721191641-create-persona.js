'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        {
          nombre: "nombre_1",
          apellido: "apellido_1",
          email: "nombre_apellido_1@gmail.com",
          password: "1234",
          documento: "",
          rol_id: 1,
          genero_id: 3,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_2",
          apellido: "apellido_2",
          email: "nombre_apellido_2@gmail.com",
          password: "1234",
          documento: "30000002",
          rol_id: 2,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_3",
          apellido: "apellido_3",
          email: "nombre_apellido_3@gmail.com",
          password: "1234",
          documento: "30000003",
          rol_id: 2,
          genero_id: 1,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_4",
          apellido: "apellido_4",
          email: "nombre_apellido_4@gmail.com",
          password: "1234",
          documento: "30000005",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_5",
          apellido: "apellido_5",
          email: "nombre_apellido_5@gmail.com",
          password: "1234",
          documento: "30000005",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_6",
          apellido: "apellido_6",
          email: "nombre_apellido_6@gmail.com",
          password: "1234",
          documento: "30000006",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_7",
          apellido: "apellido_7",
          email: "nombre_apellido_7@gmail.com",
          password: "1234567",
          documento: "30000007",
          rol_id: 3,
          genero_id: 1,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_8",
          apellido: "apellido_8",
          email: "nombre_apellido_8@gmail.com",
          password: "12345678",
          documento: "30000008",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_9",
          apellido: "apellido_9",
          email: "nombre_apellido_9@gmail.com",
          password: "123456789",
          documento: "30000009",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: '',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nombre: "nombre_10",
          apellido: "apellido_10",
          email: "nombre_apellido_10@gmail.com",
          password: "12345678910",
          documento: "30000010",
          rol_id: 3,
          genero_id: 2,
          documento_id: 1,
          localidad_id: 1,
          provincia_id: 2,
          pais_id: 9,
          carrera_id: '',
          created_at: new Date(),
          updated_at: new Date()
        },
      ];

      return queryInterface.bulkInsert('Personas', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Personas', null, {});

  }
};
