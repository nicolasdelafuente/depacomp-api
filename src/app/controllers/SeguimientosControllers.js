const Controller = require('./Controller');
const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);
const { Seguimiento, Categoria, Estado, SeguimientoTipo, Persona, Entrevista, Genero, DocumentoTipo, Carrera } = require(`${path.DATABASE}/db`);

const attributes = [
  "id",
  "motivo",
  "created_at",
  "updated_at"
]

const includes = [
  {
    model: Categoria, as: 'categoria',
    attributes: ["id", "nombre"]
  }, {
    model: Estado, as: 'estado',
    attributes: ["id", "nombre", "color"]
  }, {
    model: SeguimientoTipo, as: 'seguimientoTipo',
    attributes: ["id", "nombre"]
  }, {
    model: Persona, as: 'orientador',
    attributes: ["id", "nombre","apellido"]
  }, {
    model: Persona, as: 'derivador',
    attributes: ["id", "nombre","apellido"]
  }, {
    model: Persona, as: 'orientado',
    attributes: ["id", "nombre", "apellido", "documento","email","telefono"],
    include: [
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
        model: Carrera,
        as: "carrera",
        attributes: ["id", "nombre"]
      },//agregar persona
    ]
  }
];


class SeguimientoControllers extends Controller {
  constructor(){
    super(Seguimiento, 'Seguimiento'); 
  }
}

const get = async (_, res) => {
  try {
    let data = await Seguimiento.findAll({
      attributes: attributes,
      include: includes,
    });

    return res.status(200).json({ data });

  } catch (error) {
    handleErrors(error,'get', nameController);
    return res.status(500).json({ error: error.message })
  }
}

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.model.findOne({
        where: { id: id },
  
        attributes: attributes,
        include: includes,
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

  getByCategoria = async (req, res) => {
    try {
      const { id } = req.params; 
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "motivo"
        ],
        include: {
          model: Categoria,
          as:"categoria",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByCategoria', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }

  getByEstado = async (req, res) => {
    try {
      const { id } = req.params; 
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "motivo"
        ],
        include: {
          model: Estado,
          as:"estado",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getByEstado', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }

  getBySeguimientoTipo = async (req, res) => {
    try {
      const { id } = req.params; 
  
      let data = await this.model.findAll({
        attributes: [
          "id",
          "motivo"
        ],
        include: {
          model: SeguimientoTipo,
          as:"seguimientoTipo",
          where: {
            id: id,
          },
          attributes: [], // Excluir los atributos del modelo  
        },  
      });
      if (data) {
        return res.status(200).json({ data });
    }
    return res.status(404).send({message: `No existe ${this.name} con el id especificado`});
      
    } catch (error) {
      handleErrors(error, 'getBySeguimientoTipo', this.name);   
      return res.status(500).json({ error: error.message })
    }
  }

  getByOrientadorId = async (req, res) => {
    try {
      const { orientador_id } = req.params;
      const data = await this.model.findAll({
        where: { orientador_id: orientador_id }
      });
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(404).send({ message: `No existe ${this.name} con el id especificado`});
    } catch (error) {
      handleErrors(error, 'getByOrientadorId', this.name);
      return res.status(500).send({ error: error.message });
    }
  }

  getBySeguimientoId = async (req, res) => {
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
      handleErrors(error, 'getBySeguimientoId', this.name);
      return res.status(500).send({ error: error.message });
    }
  }


module.exports = new SeguimientoControllers();