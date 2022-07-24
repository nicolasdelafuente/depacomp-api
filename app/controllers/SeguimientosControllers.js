const { Seguimiento } = require('../database/db');

module.exports = {

  async get(_, res) {
    let seguimientos = await Seguimiento.findAll();

    res.json(seguimientos);
  }

}