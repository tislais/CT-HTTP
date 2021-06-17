const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('/	GET	plain text "hi"', async () => {
    const actual = await request(app).get('/');
    const expected = 'hi';
    
    expect(actual.text).toEqual(expected);
    expect(actual.type).toEqual('text/html');
  });

  it('/echo	POST status code 200 and plain text with the request body', async () => {
    const actual = await request(app).post('/echo').send('test body');
    const expected = 'test body';
    
    expect(actual.text).toEqual(expected);
    expect(actual.status).toEqual(200);
    expect(actual.type).toEqual('text/plain');
  });

  it('/red GET html with an h1 and the word red', async () => {
    const actual = await request(app).get('/red');
    const expected = '<h1>red</h1>';

    expect(actual.text).toEqual(expected);
    expect(actual.type).toEqual('text/html');
  });

  it('/green GET html with an h1 and the word green', async () => {
    const actual = await request(app).get('/green');
    const expected = '<h1>green</h1>';

    expect(actual.text).toEqual(expected);
    expect(actual.type).toEqual('text/html');
  });

  it('/blue GET html with an h1 and the word blue', async () => {
    const actual = await request(app).get('/blue');
    const expected = '<h1>blue</h1>';

    expect(actual.text).toEqual(expected);
    expect(actual.type).toEqual('text/html');
  });

  
  it('/index.html returns file contents', async () => {
    const actual = await request(app).get('/index.html');
    const expected = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Index</title>
    </head>
    <body>
      <h1>Index.html</h1>
    </body>
    </html>`;
    
    expect(actual).toEqual(expected);
  });

});


