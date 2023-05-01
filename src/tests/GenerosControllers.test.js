const request = require('supertest');
const server = require('../../app');

describe('Generos Controller', () => {
  const rol = {
    nombre: 'Test Genero',
  };

  afterAll((done) => {
    server.close(done);
  });

  let rolId;

  test('should create a new Genero', async () => {
    const response = await request(server)
      .post('/depacomp-api/v1/generos')
      .send(rol)
      .expect(201);

    expect(response.body.data.nombre).toBe(rol.nombre);
    expect(response.body.data.id).toBeTruthy();

    rolId = response.body.data.id;
  });

  test('should get a list of Genero', async () => {
    const response = await request(server)
      .get('/depacomp-api/v1/generos')
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  test('should get a single Genero', async () => {
    const response = await request(server)
      .get(`/depacomp-api/v1/generos/${rolId}`)
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(rolId);
    expect(response.body.data.nombre).toBe(rol.nombre);
  });

  test('should update a Genero', async () => {
    const newNombre = 'Test Genero Updated';

    const response = await request(server)
      .put(`/depacomp-api/v1/generos/${rolId}`)
      .send({ nombre: newNombre })
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(rolId);
    expect(response.body.data.nombre).toBe(newNombre);
  });

  test('should delete a Genero', async () => {
    const response = await request(server)
      .delete(`/depacomp-api/v1/generos/${rolId}`)
      .expect(204);

    expect(response.body).toEqual({});
  });

});
