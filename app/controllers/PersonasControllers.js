const { Persona } = require('../database/db');

module.exports = {

  async all(_, res) {
    let personas = await Persona.findAll();

    res.json(personas);
  }

}