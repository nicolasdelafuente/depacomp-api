const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const {
  Persona,
  Genero,
  DocumentoTipo,
  Rol,
  Pais,
  Provincia,
  Localidad
} = require(`${path.DATABASE}/db`);

const attributes = [
  'id',
  'nombre',
  'apellido',
  'email',
  'password',
  'documento',
  'created_at',
  'updated_at'
];

const includes = [
  {
    model: Genero,
    as: 'genero',
    attributes: ['id', 'nombre']
  },
  {
    model: DocumentoTipo,
    as: 'documentoTipo',
    attributes: ['id', 'nombre']
  },
  {
    model: Rol,
    as: 'rol',
    attributes: ['id', 'nombre']
  },
  {
    model: Pais,
    as: 'pais',
    attributes: ['id', 'nombre']
  },
  {
    model: Provincia,
    as: 'provincia',
    attributes: ['id', 'nombre']
  },
  {
    model: Localidad,
    as: 'localidad',
    attributes: ['id', 'nombre']
  }
];

class PersonasController extends Controller {
  constructor() {
    const logger = { handleErrors }; // Pasar los objeto logger personalizado
    super(Persona, 'Persona', logger);
  }

  get = async (_, res) => {
    try {
      const data = await this.model.findAll({
        attributes: attributes,
        include: includes
      });
      return res.status(200).json({ data });
    } catch (error) {
      handleErrors(error, 'get', this.name);
      return res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.model.findOne({
        where: { id: id },
        attributes: attributes,
        include: includes
      });
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado` });
    } catch (error) {
      handleErrors(error, 'getById', this.name);
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new PersonasController();