const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`)
const { Rol } = require(`${path.DATABASE}/db`);

const nameController = "Rol"

const attributes = [
  "id",
  "nombre",
  "created_at",
  "updated_at"
]

const create = async (req, res) => {
  try {
      const data = await Rol.create(req.body);
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
    throw new Error("Este es un error forzado");
    let data = await Rol.findAll({
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
      const data = await Rol.findOne({
          where: { id: id },

          attributes: attributes
      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Rol con el id especificado'});
  } catch (error) {
      handleErrors(error, 'getById', nameController);
      return res.status(500).send({ error: error.message });
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Rol.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Rol.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Rol not found');
  } catch (error) {
      handleErrors(error, 'update', nameController);
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Rol.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Rol eliminado" });
      }
      throw new Error("Rol no encontrado");
  } catch (error) {
      handleErrors(error, 'destroy', nameController);
      return res.status(500).send({ error: error.message });
  }
};


module.exports = {
  create,
  get,
  getById,
  update,
  destroy
}
