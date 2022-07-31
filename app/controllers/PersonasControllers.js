const { Persona } = require('../database/db');

const create = async (req, res) => {
  try {
      const data = await Persona.create(req.body);
      return res.status(201).json({
          data,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const get = async (_, res) => {
  try {
    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre",
        "apellido",
        "email",
        "password",
        "documento",
        "created_at",
        "updated_at"
      ],

      include: [
        {
          association: "genero",
          attributes: ["id", "nombre"]
        },
        {
          association: "documento__id",
          attributes: ["id", "nombre"]
        },
        {
          association: "rol",
          attributes: ["id", "nombre"]
        },
        {
          association: "pais",
          attributes: ["id", "nombre"]
        },
        {
          association: "provincia",
          attributes: ["id", "nombre"]
        },
        {
          association: "localidad",
          attributes: ["id", "nombre"]
        },
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
      const data = await Persona.findOne({
          where: { id: id },

          attributes: [
            "id",
            "nombre",
            "apellido",
            "email",
            "password",
            "documento",
            "created_at",
            "updated_at"
          ],
    
          include: [
            {
              association: "genero",
              attributes: ["id", "nombre"]
            },
            {
              association: "documento__id",
              attributes: ["id", "nombre"]
            },
            {
              association: "rol",
              attributes: ["id", "nombre"]
            },
            {
              association: "pais",
              attributes: ["id", "nombre"]
            },
            {
              association: "provincia",
              attributes: ["id", "nombre"]
            },
            {
              association: "localidad",
              attributes: ["id", "nombre"]
            },
          ]
        });

      if (data) {
          return res.status(200).json({ data });
      }
      return res.status(404).send({message: 'No existe Persona con el id especificado'});
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
}

const update = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Persona.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedData = await Persona.findOne({ where: { id: id } });
          return res.status(200).json({ data: updatedData });
      }
      throw new Error('Persona not found');
  } catch (error) {
      return res.status(500).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Persona.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send({ message: "Persona eliminada" });
      }
      throw new Error("Persona no encontrada");
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