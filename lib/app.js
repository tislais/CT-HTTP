const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString()); 
    
    if(request.path === '/' && request.method === 'GET') {

      socket.end(createResponse({ body: 'hi', contentType: 'text/html' }));

    } else if(request.path === '/echo' && request.method === 'POST') {

      socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));

    } else if(request.path === '/red' && request.method === 'GET') {

      socket.end(createResponse({ body: '<h1>red</h1>', status: '200', contentType: 'text/html' }));

    } else if(request.path === '/green' && request.method === 'GET') { 

      socket.end(createResponse({ body: '<h1>green</h1>', status: '200', contentType: 'text/html' }));

    } else if(request.path === '/blue' && request.method === 'GET') {

      socket.end(createResponse({ body: '<h1>blue</h1>', status: '200', contentType: 'text/html' }));

    } else {

      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));

    }
  });
});

module.exports = app;


// Plan

// 1. write a test that will GET from /index.html and receive the file contents
// 2. write a second test that will GET from a file path that doesnt exist and receive a Not Found message
// 3. import the fs API and figure out how to use it in app.js
// 4. create the index.html file
// 5. write the route 
// 6. ????
// 7. success

