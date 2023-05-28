const path = require('../../paths');
const { Estado } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "nombre",
  "color",
  "created_at",
  "updated_at"
]

const create = async (req, res) => {
  try {
      const data = await Estado.create(req.body);
      return res.status(201).json({
          data,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const get = async (_, res) => {
  try {
    let data = await Estado.findAll({
      attributes: attributes
    });

    return res.status(200).json({ data });
    
  } catch (error) {      
    return res.status(500).json({ error: error.message })
  }
}

const getById = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Estado.findOne({
          where: { id: id },

          attributes: attributes
      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Estado con el id especificado'});
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Estado.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Estado.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Estado not found');
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Estado.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Estado eliminado" });
      }
      throw new Error("Estado no encontrado");
  } catch (error) {
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