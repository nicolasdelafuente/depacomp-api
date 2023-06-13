const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { DocumentoTipo } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class DocumentoTipoControllers extends Controller {
  constructor(){
    super(DocumentoTipo, 'DocumentoTipo', attributes)
  }
}

module.exports = new DocumentoTipoControllers();