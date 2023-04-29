const path = require('../../paths');
const { Carrera } = require(`${path.DATABASE}\\db`);

const create = async (req, res) => {
  try {
      const data = await Carrera.create(req.body);
      return res.status(201).json({
          data,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const get = async (_, res) => {
  try {
    let data = await Carrera.findAll({
      attributes: [
        "id",
        "nombre",
        "created_at",
        "updated_at"
      ],

      include: {
        association: "instituto",
        attributes: ["id", "nombre"]
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {      
    return res.status(500).json({ error: error.message })
  }
}

const getById = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Carrera.findOne({
          where: { id: id },

          attributes: [
            "id",
            "nombre",
            "created_at",
            "updated_at"
          ],
    
          include: {
            association: "instituto",
            attributes: ["id", "nombre","created_at","updated_at"]
          },  

      });
      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe carrera con el id especificado'});
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Carrera.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Carrera.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Carrera not found');
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Carrera.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Carrera eliminada" });
      }
      throw new Error("Carrera no encontrada");
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

