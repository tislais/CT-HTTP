const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString()); 
    
    if(request.path === '/' && request.method === 'GET') {

      // GET plain text "hi"
      socket.end(createResponse({ body: 'hi', contentType: 'text/plain' }));
    } else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;


