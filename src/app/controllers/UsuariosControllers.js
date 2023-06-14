const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Usuario } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "password",
  "email",
  "token",
  "confirmado",
  "created_at",
  "updated_at"
]

class UsuarioControllers extends Controller {
  constructor() {
    super(Usuario, 'Usuario', attributes);
  }
}

module.exports = new UsuarioControllers();