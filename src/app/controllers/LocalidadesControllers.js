const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Localidad, Provincia } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class LocalidadController extends Controller {
  constructor(){
    super(Localidad, 'Localidad', attributes);
  }

  getByProvincia = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del provincia de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "provincia_id"
        ],
        include: {
          model: Provincia,
          as:"provincia",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo Provincia  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
    } catch (error) {
      handleErrors(error, 'getByProvincia', this.name);   
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = new LocalidadController();