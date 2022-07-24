const { Rol } = require('../database/db');

module.exports = {

  async get(_, res) {
    let roles = await Rol.findAll();

    res.json(roles);
  }

}