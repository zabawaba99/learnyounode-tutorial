var http = require('http');
var map = require('through2-map');

var mapper = function(chunk) {
  return chunk.toString().toUpperCase();
}

var handleReq = function(req, resp) {
  if (!req.method === "POST") {
    resp.writeHead(405);
    return
  }

  req.pipe(map(mapper)).pipe(resp);
}

var server = http.createServer(handleReq);
server.listen(process.argv[2]);