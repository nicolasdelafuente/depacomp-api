const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Instituto } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class InstitutoControllers extends Controller {
  constructor(){
    super(Instituto, 'Instituto', attributes)
  }
}

module.exports = new InstitutoControllers();