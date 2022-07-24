const { Genero } = require('../database/db');

module.exports = {

  async get(_, res) {
    let generos = await Genero.findAll();

    res.json(generos);
  }

}