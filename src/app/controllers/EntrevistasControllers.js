const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Entrevista, Seguimiento } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "observaciones",
  "acciones",
  "seguimiento_id",
  "orientador_id",
  "created_at",
  "updated_at"
]

class EntrevistaControllers extends Controller {
  constructor(){
    super(Entrevista, 'Entrevista', attributes)
  }

  getBySeguimiento = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del Seguimiento de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "observaciones",
          "acciones",
          "seguimiento_id",
          "orientador_id"
        ],
        include: {
          model: Seguimiento,
          as:"seguimiento",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo Seguimiento
        },
      });
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
  
    } catch (error) {
      handleErrors(error, 'getBySeguimiento', this.name);
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = new EntrevistaControllers();