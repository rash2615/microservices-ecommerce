const request = require('supertest');
const app = require('../index'); // Assure-toi que ton app Express est exportée

describe('GET /products', () => {
  it('devrait retourner un tableau de produits', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
