const { DocumentoTipo } = require('../database/db');

module.exports = {

  async all(_, res) {
    let documentosTipo = await DocumentoTipo.findAll();

    res.json(documentosTipo);
  }
}