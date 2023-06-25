const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Genero } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class GeneroControllers extends Controller {
  constructor(){
    super(Genero, 'Genero', attributes)
  }
}

module.exports = new GeneroControllers();