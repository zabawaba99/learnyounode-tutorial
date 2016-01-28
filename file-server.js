var http = require('http');
var fs = require('fs');

var handleReq = function(req, res) {
  fs.createReadStream(process.argv[3]).pipe(res);
}

var server = http.createServer(handleReq);
server.listen(process.argv[2]);