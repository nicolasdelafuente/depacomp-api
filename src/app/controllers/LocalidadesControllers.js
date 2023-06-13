const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Localidad } = require(`${path.DATABASE}/db`);

const attributes = [
  'id',
  'nombre',
  'created_at',
  'updated_at'
];

class LocalidadController extends Controller {
  constructor() {
    super(Localidad, 'Localidad');
  }

  get = async (_, res) => {
    try {
      let data = await this.model.findAll({
        attributes: attributes
      });
  
      return res.status(200).json({ data });
      
    } catch (error) {
      handleErrors(error,'get', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new LocalidadController();