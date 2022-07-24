const { Pais } = require('../database/db');

module.exports = {

  async get(_, res) {
    let paises = await Pais.findAll();

    res.json(paises);
  }

}