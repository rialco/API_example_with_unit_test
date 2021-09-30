const request = require('supertest');
const app = require('../../app');

describe('GET /*', () => {
  it('Should response with Not found', async () => {
    const response = await request(app).get('/prueba');
    expect(response.body.status).toBe(404);
    expect(response.body.data).toBe(null);
    expect(response.body.err).toBe('Not found');
  });
});
