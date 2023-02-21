const { Rol } = require('../database/db');

const create = async (req, res) => {
  try {
      const data = await Rol.create(req.body);
      return res.status(201).json({
          data,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const get = async (_, res) => {
  try {
    let data = await Rol.findAll({
      attributes: [
        "id",
        "nombre",
        "created_at",
        "updated_at"
      ] 
    });

    return res.status(200).json({ data });
    
  } catch (error) {      
    return res.status(500).json({ error: error.message })
  }
}

const getById = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Rol.findOne({
          where: { id: id },

          attributes: [
            "id",
            "nombre",
            "created_at",
            "updated_at"
          ]
      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Rol con el id especificado'});
  } catch (error) {
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