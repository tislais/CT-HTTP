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
    expect(actual.status).toEqual(200);
  });

  it('/red GET html with an h1 and the word red', async () => {
    const actual = await request(app).get('/red');
    const expected = '<h1>red</h1>';
    expect(actual.text).toEqual(expected);
  });

  it('/green GET html with an h1 and the word green', async () => {
    const actual = await request(app).get('/green');
    const expected = '<h1>green</h1>';
    expect(actual.text).toEqual(expected);
  });
});


