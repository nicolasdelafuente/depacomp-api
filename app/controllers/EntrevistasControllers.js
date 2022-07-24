const { Entrevista } = require('../database/db');

module.exports = {

  async get(_, res) {
    let entrevistas = await Entrevista.findAll();

    res.json(entrevistas);
  }

}