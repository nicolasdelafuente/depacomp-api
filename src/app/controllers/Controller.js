const path = require('../../paths');
const { handleErrors } = require(`${path.SERVICES}/logger`);

class Controller {
  constructor(model, name,attributes = null) {
    this.model = model;
    this.name = name;
    this.attributes = attributes;
    //this.logger = logger;
  }

  create = async (req, res) => {
    try {
      const data = await this.model.create(req.body);
      return res.status(201).json({ data });
    } catch (error) {
      handleErrors(error, 'create', this.name);
      return res.status(500).json({ error: error.message });
    }
  }

  get = async (_, res) => {
    try {
      let data = await this.model.findAll({
        attributes: this.attributes
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
  
            attributes: this.attributes
        });
        if (data) {
            return res.status(200).json({ data });
        }
        return res.status(404).send({message: 'No existe Genero con el id especificado'});
    } catch (error) {
        handleErrors(error, 'getById', this.name);
        return res.status(500).send({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await this.model.update(req.body, { where: { id: id } });
      if (updated) {
        const updatedData = await this.model.findOne({ where: { id: id } });
        return res.status(200).json({ data: updatedData });
      }
      throw new Error(`${this.name} not found`);
    } catch (error) {
      handleErrors(error, 'update', this.name);
      return res.status(500).send({ error: error.message });
    }
  }

  destroy = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await this.model.destroy({ where: { id: id } });
      if (deleted) {
        return res.status(204).send({ message: `${this.name} eliminada` });
      }
      throw new Error(`${this.name} no encontrada`);
    } catch (error) {
      handleErrors(error, 'destroy', this.name);
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = Controller;