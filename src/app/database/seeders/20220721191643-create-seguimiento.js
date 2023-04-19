'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { categoria_id: 1, estado_id:1, seguimiento_tipo_id:1, entrevistador_id: 1, derivador_id: 1, entrevistado_id: 1, motivo: "Motivo_1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: new Date(), updated_at: new Date() },
        { categoria_id: 1, estado_id:1, seguimiento_tipo_id:1, entrevistador_id: 1, derivador_id: 1, entrevistado_id: 1, motivo: "Motivo_2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: new Date(), updated_at: new Date() },
        { categoria_id: 2, estado_id:2, seguimiento_tipo_id:2, entrevistador_id: 1, derivador_id: 1, entrevistado_id: 1, motivo: "Motivo_3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: new Date(), updated_at: new Date() },
        { categoria_id: 2, estado_id:2, seguimiento_tipo_id:2, entrevistador_id: 1, derivador_id: 1, entrevistado_id: 1, motivo: "Motivo_4: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: new Date(), updated_at: new Date() },
        { categoria_id: 3, estado_id:3, seguimiento_tipo_id:3, entrevistador_id: 1, derivador_id: 1, entrevistado_id: 1, motivo: "Motivo_5: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('Seguimientos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Seguimientos', null, {});
    
  }
};
