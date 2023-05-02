const request = require('supertest');
const server = require('../../app');

class BaseControllerTest {
  constructor(route) {
    this.route = route;
    this.id = null;
  }

  async closeServer() {
    await server.close();
  }


  async createEntity(entity) {
    const response = await request(server)
      .post(this.route)
      .send(entity)
      .expect(201);

    expect(response.body.data.nombre).toBe(entity.nombre);
    expect(response.body.data.id).toBeTruthy();

    this.id = response.body.data.id;
  }

  async getList() {
    const response = await request(server)
      .get(this.route)
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
  }

  async getSingle() {
    const response = await request(server)
      .get(`${this.route}/${this.id}`)
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(this.id);
  }

  async updateEntity(newEntity) {
    const response = await request(server)
      .put(`${this.route}/${this.id}`)
      .send(newEntity)
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.id).toBe(this.id);
    expect(response.body.data.nombre).toBe(newEntity.nombre);
  }

  async deleteEntity() {
    const response = await request(server)
      .delete(`${this.route}/${this.id}`)
      .expect(204);

    expect(response.body).toEqual({});
  }
}


module.exports = BaseControllerTest;