const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('/	GET	plain text "hi"', async () => {
    const actual = await request(app).get('/');
    const expected = 'hi';
    expect(actual.text).toEqual(expected);
  });

  it('/echo	POST status code 200 and plain text with the request body', async () => {
    const actual = await request(app).post('/echo').send('test body');
    const expected = 'test body';
    expect(actual.text).toEqual(expected);
  });

  // it('/red GET html with an h1 and the word red', async () => {

  // });

  
  
});


