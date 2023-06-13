const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Localidad, Provincia } = require(`${path.DATABASE}/db`);

const nameController = "Localidad"

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

const create = async (req, res) => {
  try {
      const data = await Localidad.create(req.body);
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
    let data = await Localidad.findAll({
      attributes: attributes
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
      const data = await Localidad.findOne({
          where: { id: id },

          attributes: attributes
      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Localidad con el id especificado'});
  } catch (error) {
      handleErrors(error, 'getById', nameController);
      return res.status(500).send({ error: error.message });
  }
}

const getByProvincia = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del provincia de los parámetros de la solicitud

    let data = await Localidad.findAll({
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

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByProvincia', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Localidad.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Localidad.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Localidad not found');
  } catch (error) {
      handleErrors(error, 'update', nameController);
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Localidad.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Localidad eliminada" });
      }
      throw new Error("Localidad no encontrada");
  } catch (error) {
      handleErrors(error, 'destroy', nameController);
      return res.status(500).send({ error: error.message });
  }
};


module.exports = {
  create,
  get,
  getById,
  getByProvincia,
  update,
  destroy
}