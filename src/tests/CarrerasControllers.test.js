const path = require('../paths')
const BaseControllerTest = require(`${path.TESTS}/baseControllerTest.js`);
const controllerName = "Carreras"
const singularName = "Carrera"

describe(`${controllerName} Controller`, () => {
  const route = '/depacomp-api/v1/carreras';
  const rol = {
    nombre: 'Test Rol',
  };

  const rolTest = new BaseControllerTest(route);

  afterEach(async () => {
    await rolTest.closeServer();
  });

  test(`should create a new ${singularName}`, async () => {
    await rolTest.createEntity(rol);
  });

  test(`should get a list of ${singularName}`, async () => {
    await rolTest.getList();
  });

  test(`should get a single ${singularName}`, async () => {
    await rolTest.getSingle();
  });

  test(`should update a ${singularName}`, async () => {
    const newNombre = `Test ${singularName} Updated`;

    await rolTest.updateEntity({ nombre: newNombre });
  });

  test(`should delete a ${singularName}`, async () => {
    await rolTest.deleteEntity();
  });
});