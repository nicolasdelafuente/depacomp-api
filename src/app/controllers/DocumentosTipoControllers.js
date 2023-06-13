const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { DocumentoTipo } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class DocumentoTipoController extends Controller {
  constructor() {
    super(DocumentoTipo, 'DocumentoTipo');
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

  getById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await this.model.findOne({
            where: { id: id },
  
            attributes: attributes
        });
        if (data) {
            return res.status(200).json({ data });
        }
        return res.status(404).send({message: 'No existe el DocumentoTipo con el id especificado'});
    } catch (error) {
        handleErrors(error, 'getById', this.name);
        return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new DocumentoTipoController();