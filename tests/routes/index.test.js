const request = require('supertest');
const app = require('../../app');

describe('GET /', () => {
  it('Should response hello world', async () => {
    const response = await request(app).get('/');
    expect(response.body.data).toBe('hello world');
  });
});
