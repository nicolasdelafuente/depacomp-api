const { DocumentoTipo } = require('../database/db');

module.exports = {

  async get(_, res) {
    let documentosTipo = await DocumentoTipo.findAll();

    res.json(documentosTipo);
  }
}