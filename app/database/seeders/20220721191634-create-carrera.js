'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Tecnicatura en Laboratorio', instituto_id: 1 },
        { nombre: 'Tecnicatura Universitaria en Gestión Ambiental', instituto_id: 1 },
        { nombre: 'Tecnicatura Universitaria en Tecnología de los Alimentos', instituto_id: 1 },
        { nombre: 'Tecnicatura Universitaria en Viverismo', instituto_id: 1 },
        { nombre: 'Licenciatura en Biotecnología', instituto_id: 1 },
        { nombre: 'Licenciatura en Gestión Ambiental', instituto_id: 1 },
        { nombre: 'Licenciatura en Tecnología de los Alimentos', instituto_id: 1 },
        { nombre: 'Tecnicatura Universitaria en Producción Agroecológica Periurbana', instituto_id: 1 },
        { nombre: 'Profesorado Universitario en Educación Física', instituto_id: 2 },
        { nombre: 'Profesorado Universitario de Letras', instituto_id: 2 },
        { nombre: 'Profesorado Universitario de Inglés', instituto_id: 2 },
        { nombre: 'Licenciatura en Educación', instituto_id: 2 },
        { nombre: 'Profesorado Universitario de Matemática', instituto_id: 2 },
        { nombre: 'Profesorado Universitario de Biología', instituto_id: 2 },
        { nombre: 'Enfermería Universitaria', instituto_id: 3 },
        { nombre: 'Licenciatura en Kinesiología y Fisiatría', instituto_id: 3 },
        { nombre: 'Licenciatura en Enfermería', instituto_id: 3 },
        { nombre: 'Licenciatura en Obstetricia', instituto_id: 3 },
        { nombre: 'Tecnicatura Universitaria en Programación (NUEVA)', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Diseño Industrial', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Metalurgia', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Energía Eléctrica', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Informática', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Mantenimiento Hospitalario', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Redes y Operaciones Informáticas. (NUEVA)', instituto_id: 4 },
        { nombre: 'Licenciatura en Diseño Industrial', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Diseño Industrial', instituto_id: 4 },
        { nombre: 'Ingeniería Metaúrgica', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Metalurgia', instituto_id: 4 },
        { nombre: 'Ingeniería Eléctrica', instituto_id: 4 },
        { nombre: 'Técnico/a Universitario/a en Energía Eléctrica', instituto_id: 4 },
        { nombre: 'Licenciatura en Informática', instituto_id: 4 },
        { nombre: 'Técnico/a Universitario/a en Informática', instituto_id: 4 },
        { nombre: 'Tecnicatura Universitaria en Mantenimiento Industrial', instituto_id: 4 },
      ];

      return queryInterface.bulkInsert('carreras', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('carreras', null, {});
    
  }
};

