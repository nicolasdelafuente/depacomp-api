const { Instituto } = require('../database/db');

module.exports = {

  async get(_, res) {
    let institutos = await Instituto.findAll();

    res.json(institutos);
  }

}