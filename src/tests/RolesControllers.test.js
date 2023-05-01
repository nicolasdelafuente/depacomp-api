const request = require('supertest');
const server = require('../../app');

describe('Roles Controller', () => {
  const rol = {
    nombre: 'Test Rol',
  };

  afterAll((done) => {
    server.close(done);
  });

  let rolId;

  test('should create a new Rol', async () => {
    const response = await request(server)
      .post('/depacomp-api/v1/roles')
      .send(rol)
      .expect(201);

    expect(response.body.data.nombre).toBe(rol.nombre);
    expect(response.body.data.id).toBeTruthy();

    rolId = response.body.data.id;
  });

  test('should get a list of Rol', async () => {
    const response = await request(server)
      .get('/depacomp-api/v1/roles')
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  test('should get a single Rol', async () => {
    const response = await request(server)
      .get(`/depacomp-api/v1/roles/${rolId}`)
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(rolId);
    expect(response.body.data.nombre).toBe(rol.nombre);
  });

  test('should update a Rol', async () => {
    const newNombre = 'Test Rol Updated';

    const response = await request(server)
      .put(`/depacomp-api/v1/roles/${rolId}`)
      .send({ nombre: newNombre })
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(rolId);
    expect(response.body.data.nombre).toBe(newNombre);
  });

  test('should delete a Rol', async () => {
    const response = await request(server)
      .delete(`/depacomp-api/v1/roles/${rolId}`)
      .expect(204);

    expect(response.body).toEqual({});
  });

});
