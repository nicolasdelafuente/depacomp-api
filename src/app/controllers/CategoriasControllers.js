const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Categoria } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class CategoriaControllers extends Controller {
  constructor(){
    super(Categoria, 'Categoria', attributes)
  }
}

module.exports = new CategoriaControllers();