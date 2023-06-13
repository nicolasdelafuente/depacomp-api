const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Entrevista, Seguimiento } = require(`${path.DATABASE}/db`);

const nameController = "Entrevista"

const attributes = [
  "id",
  "observaciones",
  "acciones",
  "seguimiento_id",
  "entrevistador_id",
  "created_at",
  "updated_at"
]

const create = async (req, res) => {
  try {
      const data = await Entrevista.create(req.body);
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
    let data = await Entrevista.findAll({
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
      const data = await Entrevista.findOne({
          where: { id: id },
          attributes: attributes
      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Entrevista con el id especificado'});
  } catch (error) {
      handleErrors(error, 'getById', nameController);
      return res.status(500).send({ error: error.message });
  }
}


const getBySeguimiento = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del Seguimiento de los parámetros de la solicitud

    let data = await Entrevista.findAll({
      attributes: [
        "id",
        "observaciones",
        "acciones",
        "seguimiento_id",
        "entrevistador_id"
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
    return res.status(404).send({message: 'No existe Seguimiento con el id especificado'});

  } catch (error) {
    handleErrors(error, 'getBySeguimiento', nameController);
    return res.status(500).json({ error: error.message })
  }
}




const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Entrevista.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Entrevista.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Entrevista not found');
  } catch (error) {
      handleErrors(error, 'update', nameController);
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Entrevista.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Entrevista eliminada" });
      }
      throw new Error("Entrevista no encontrada");
  } catch (error) {
      handleErrors(error, 'destroy', nameController);
      return res.status(500).send({ error: error.message });
  }
};


module.exports = {
  create,
  get,
  getById,
  getBySeguimiento,
  update,
  destroy
}