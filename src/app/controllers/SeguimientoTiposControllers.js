const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { SeguimientoTipo } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class SeguimientoTipoControllers extends Controller {
  constructor(){
    super(SeguimientoTipo, 'SeguimientoTipo', attributes)
  }
}

module.exports = new SeguimientoTipoControllers();