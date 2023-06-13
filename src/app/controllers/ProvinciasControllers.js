const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Provincia, Pais } = require(`${path.DATABASE}/db`);

const nameController = "Provincia"

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

const create = async (req, res) => {
  try {
      const data = await Provincia.create(req.body);
      return res.status(201).json({
          data,
      });
  } catch (error) {
      handleErrors(error, 'create', nameController);
      return res.status(500).json({ error: error.message })
  }
}

const get = async (_, res) => {
  try {
    let data = await Provincia.findAll({
      attributes: attributes,
      
      include: {
        association: "pais",
        attributes: ["id","nombre"]      
      }
    });

    return res.status(200).json({ data });
    
  } catch (error) { 
    handleErrors(error,'get', nameController);     
    return res.status(500).json({ error: error.message })
  }
}

const getById = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Provincia.findOne({
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
      return res.status(404).send({message: 'No existe Provincia con el id especificado'});
  } catch (error) {
      handleErrors(error, 'getById', nameController);handleErrors(error, 'getById', nameController);
      return res.status(500).send({ error: error.message });
  }
}

const getByPais = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del Pais de los parámetros de la solicitud

    let data = await Provincia.findAll({
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
  return res.status(404).send({message: 'No existe Provincia con el id especificado'});
    
  } catch (error) {
    handleErrors(error, 'getByPais', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Provincia.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Provincia.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Provincia not found');
  } catch (error) {
      handleErrors(error, 'update', nameController);
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Provincia.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Provincia eliminada" });
      }
      throw new Error("Provincia no encontrada");
  } catch (error) {
      handleErrors(error, 'destroy', nameController);
      return res.status(500).send({ error: error.message });
  }
};


module.exports = {
  create,
  get,
  getById,
  getByPais,
  update,
  destroy
}