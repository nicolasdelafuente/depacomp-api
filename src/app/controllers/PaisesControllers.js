const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Pais } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "nacionalidad",
  "iso",
  "created_at",
  "updated_at"
]

class PaisControllers extends Controller{
  constructor(){
    super(Pais, 'Pais', attributes)
  }
}

module.exports = new PaisControllers();