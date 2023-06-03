const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Persona, Genero, DocumentoTipo, Rol, Pais, Provincia, Localidad } = require(`${path.DATABASE}/db`);

const nameController = "Persona"

const attributes = [
  "id",
  "nombre",
  "apellido",
  "email",
  "password",
  "documento",
  "created_at",
  "updated_at"
];

const includes = [
  {
    model: Genero,
    as: "genero",
    attributes: ["id", "nombre"]
  },
  {
    model: DocumentoTipo,
    as: "documentoTipo",
    attributes: ["id", "nombre"]
  },
  {
    model: Rol,
    as: "rol",
    attributes: ["id", "nombre"]
  },
  {
    model: Pais,
    as: "pais",
    attributes: ["id", "nombre"]
  },
  {
    model: Provincia,
    as: "provincia",
    attributes: ["id", "nombre"]
  },
  {
    model: Localidad,
    as: "localidad",
    attributes: ["id", "nombre"]
  },
]

const create = async (req, res) => {
  try {
    const data = await Persona.create(req.body);
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
    let data = await Persona.findAll({
      attributes: attributes,
      include: includes
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
    const data = await Persona.findOne({
      where: { id: id },
      attributes: attributes,
      include: includes
    });

    if (data) {
      return res.status(200).json({ data });
    }
    return res.status(404).send({ message: 'No existe Persona con el id especificado' });
  } catch (error) {
    handleErrors(error, 'getById', nameController);
    return res.status(500).send({ error: error.message });
  }
}
//Crear endpoint que me devuelva la persona por el id de documento puesto
const getByDocumentoTipo = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del documento de los parámetros de la solicitud

    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre"
      ],
      include: {
        model: DocumentoTipo,
        as:"documentoTipo",
        where: {
          id: id,
        },
        attributes: [], // Excluir los atributos del modelo documento 
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByDocumentoTipo', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const getByGenero = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del genero de los parámetros de la solicitud

    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre"
      ],
      include: {
        model: Genero,
        as:"genero",
        where: {
          id: id,
        },
        attributes: [], // Excluir los atributos del modelo  
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByGenero', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const getByRol = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del rol de los parámetros de la solicitud

    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre"
      ],
      include: {
        model: Rol,
        as:"rol",
        where: {
          id: id,
        },
        attributes: [], // Excluir los atributos del modelo rol 
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByRol', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const getByPais = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del pais de los parámetros de la solicitud

    let data = await Persona.findAll({
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
        attributes: [], // Excluir los atributos del modelo pais 
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByPais', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const getByProvincia = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de la provincia de los parámetros de la solicitud

    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre"
      ],
      include: {
        model: Provincia,
        as:"provincia",
        where: {
          id: id,
        },
        attributes: [], // Excluir los atributos del modelo provincia
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByProvincia', nameController);   
    return res.status(500).json({ error: error.message })
  }
}

const getByLocalidad = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de la localidad de los parámetros de la solicitud

    let data = await Persona.findAll({
      attributes: [
        "id",
        "nombre"
      ],
      include: {
        model: Localidad,
        as:"localidad",
        where: {
          id: id,
        },
        attributes: [], // Excluir los atributos del modelo localidad
      },  
    });

    return res.status(200).json({ data });
    
  } catch (error) {
    handleErrors(error, 'getByLocalidad', nameController);   
    return res.status(500).json({ error: error.message })
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
    handleErrors(error, 'update', nameController);
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
    handleErrors(error, 'destroy', nameController);
    return res.status(500).send({ error: error.message });
  }
};


module.exports = {
  create,
  get,
  getById,
  getByDocumentoTipo,
  getByGenero,
  getByRol,
  getByPais,
  getByProvincia,
  getByLocalidad,
  update,
  destroy
}