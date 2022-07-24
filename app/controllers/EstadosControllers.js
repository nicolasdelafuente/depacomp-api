const { Estado } = require('../database/db');

module.exports = {

  async get(_, res) {
    let estados = await Estado.findAll();

    res.json(estados);
  }

}