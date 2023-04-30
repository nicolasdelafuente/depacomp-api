const path = require('../paths');
const chai = require('chai');
const expect = chai.expect;
const Sequelize = require("sequelize");
const config = require(`${path.CONFIG}/database`);
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const Genero = require(`${path.MODELS}/genero`)(sequelize, Sequelize.DataTypes);
const Persona = require(`${path.MODELS}/persona`)(sequelize, Sequelize.DataTypes);


describe('Genero', () => {
  before(async () => {
    await sequelize.authenticate();
  });

  beforeEach(async () => {
    this.transaction = await sequelize.transaction();
    await Persona.sync({ force: true, transaction: this.transaction });
    await Genero.sync({ force: true, transaction: this.transaction });
  });

  afterEach(async () => {
    await this.transaction.rollback();
  });

  after(async () => {
    await Genero.drop();
    await Persona.drop();
  });

  describe('#init', () => {
    it('should define the model', () => {
      expect(Genero).to.not.be.undefined;
      expect(Genero.tableName).to.equal('Generos');
    });

    it('should define the attributes', () => {
      expect(Genero.rawAttributes.nombre).to.not.be.undefined;
      expect(Genero.rawAttributes.nombre.type).to.equal(Sequelize.STRING);
    });
  });

  describe('#associate', () => {
    it('should define the association with Persona', () => {
      expect(Genero.associations.Persona).to.not.be.undefined;
      expect(Genero.associations.Persona.foreignKey).to.equal('genero_id');
    });
  });
});
