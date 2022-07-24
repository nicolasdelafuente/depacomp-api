const { Persona } = require('../database/db');

module.exports = {

  async get(_, res) {
    let personas = await Persona.findAll({

      attributes: [
        "id",
        "nombre",
        "apellido",
        "email",
        "password",
        "documento",
        "created_at",
        "updated_at"
      ],

      include: [
        {
          association: "genero",
          attributes: ["id", "nombre"]
        },
        {
          association: "documento_tipo",
          attributes: ["id", "nombre"]
        },
        {
          association: "rol",
          attributes: ["id", "nombre"]
        },
        {
          association: "pais",
          attributes: ["id", "nombre"]
        },
        {
          association: "provincia",
          attributes: ["id", "nombre"]
        },
        {
          association: "localidad",
          attributes: ["id", "nombre"]
        },
      ],
    });

    res.json(personas);
  }

}