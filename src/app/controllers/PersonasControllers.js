const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Persona, Genero, DocumentoTipo, Rol, Pais, Provincia, Localidad } = require(`${path.DATABASE}/db`);

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

class PersonaControllers extends Controller {
  constructor(){
    super(Persona, 'Persona')
  }

  get = async (_, res) => {
    try {
      let data = await this.model.findAll({
        attributes: attributes,
        include: includes
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
        include: includes
      });
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
    } catch (error) {
      handleErrors(error, 'getById', this.name);
      return res.status(500).send({ error: error.message });
    }
  }

  getByDocumentoTipo = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del documento de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByDocumentoTipo', this.name);   
      return res.status(500).json({ error: error.message})
    }
  }

  getByGenero = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del genero de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByGenero', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }

  getByRol = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del rol de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByRol', this.name);   
      return res.status(500).json({error: error.message})
    }
  }

  getByPais = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del pais de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByPais', this.name);   
      return res.status(500).json({error: error.message})
    }
  }

  getByProvincia = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID de la provincia de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByProvincia', this.name);   
      return res.status(500).json({error: error.message})
    }
  }

  getByLocalidad = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID de la localidad de los parámetros de la solicitud
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "nombre",
          "apellido",
          "email",
          "documento"
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
  
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByLocalidad', this.name);   
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = new PersonaControllers();