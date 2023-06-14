const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Carrera, Instituto } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class CarreraController extends Controller {
  constructor(){
    super(Carrera, 'Carrera');
  }

  get = async (_, res) => {
    try {
      let data = await this.model.findAll({
        attributes: attributes,
  
        include: {
          association: "instituto",
          attributes: ["id", "nombre"]
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
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
  
            attributes: attributes,
      
            include: {
              association: "instituto",
              attributes: ["id","nombre"]
            },  
  
        });
        if (data) {
            return res.status(200).json({ data });
        }
        return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
    } catch (error) {
        handleErrors(error, 'getById', this.name);
        return res.status(500).send({ error: error.message });
    }
  }

  getByInstituto = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del instituto de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre"
        ],
        include: {
          model: Instituto,
          as:"instituto",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo Instituto  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByInstituto', this.name);   
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = new CarreraController();