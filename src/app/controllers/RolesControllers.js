const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Rol } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class RolControllers extends Controller {
  constructor(){
    super(Rol, 'Rol', attributes)
  }
}

module.exports = new RolControllers();
