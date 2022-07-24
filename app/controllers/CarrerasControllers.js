const { Carrera } = require('../database/db');

module.exports = {

  async get(_, res) {

    try {

      let carreras = await Carrera.findAll({
        attributes: [
          "id",
          "nombre",
          "created_at",
          "updated_at"
        ],
  
        include: {
          association: "instituto",
          attributes: ["id", "nombre"]
        },  
      });
  
      res.json(carreras);
      
    } catch (error) {      
      return res.status(500).json({message: error.message})
    }

  }
}

