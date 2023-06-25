const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Estado } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "color",
  "created_at",
  "updated_at"
]

class EstadoController extends Controller {
  constructor(){
    super(Estado, 'Estado', attributes)
  }
}

module.exports = new EstadoController();