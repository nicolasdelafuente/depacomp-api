const { Pais } = require('../database/db');

module.exports = {

  async all(_, res) {
    let paises = await Pais.findAll();

    res.json(paises);
  }

}