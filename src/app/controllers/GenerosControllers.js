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

class GeneroController extends Controller {
  constructor() {
    super(Genero, 'Genero', attributes);
  }
}

module.exports = new GeneroController();