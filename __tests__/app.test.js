const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  // GET plain text "hi"
  it('/	GET	plain text "hi"', async () => {
    const actual = await request(app).get('/');
    const expected = 'hi';
    expect(actual.text).toEqual(expected);
  });

  

  
  
});


