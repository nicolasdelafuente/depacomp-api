const { Provincia } = require('../database/db');

module.exports = {

  async all(_, res) {
    let provincias = await Provincia.findAll({
      attributes: [
        "id",
        "nombre",
        "created_at",
        "updated_at"
      ],
      
      include: {
        association: "pais",
        attributes: ["id", "nombre"]
      }
      
    });

    res.json(provincias);
  }

}