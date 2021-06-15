module.exports = rawRequest => {
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const requestParts = rawRequest.split('\r\n\r\n');
  const body = requestParts[requestParts.length - 1];
  if(requestParts.length >= 2) {
    return {
      body,
      method,
      path
    };
  } else {
    return {
      method,
      path
    };
  }
};
