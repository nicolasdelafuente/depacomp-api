const { Localidad } = require('../database/db');

module.exports = {

  async get(_, res) {
    let localidades = await Localidad.findAll({
      attributes: [
        "id",
        "nombre",
        "created_at",
        "updated_at"
      ],
      
      include: {
        association: "provincia",
        attributes: ["id", "nombre"]
      }
      
    });

    res.json(localidades);
  }

}