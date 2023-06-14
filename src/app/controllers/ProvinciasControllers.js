const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Provincia, Pais } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

class ProvinciaControllers extends Controller {
  constructor(){
    super(Provincia, 'Provincia');
  }

  get = async (_, res) => {
    try {
      let data = await this.model.findAll({
        attributes: attributes,
        
        include: {
          association: "pais",
          attributes: ["id","nombre"]      
        }
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
  
            attributes: attributes,
            
            include: {
              association: "pais",
              attributes: ["id", "nombre"]
            }
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

  getByPais = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del Pais de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre"
        ],
        include: {
          model: Pais,
          as:"pais",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo Pais  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByPais', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new ProvinciaControllers();