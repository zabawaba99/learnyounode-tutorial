var http = require('http');
var url = require('url');
var map = require('through2-map');

var parsetime = function(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

var unixtime = function(date) {
  return {unixtime: date.getTime()};
}

var handleReq = function(req, resp) {
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);

  var body;
  switch(parsedUrl.pathname){
    case '/api/parsetime':
      body = parsetime(date);
      break;
    case '/api/unixtime':
      body = unixtime(date);
      break;
    default:
      resp.writeHead(404);
      return;
  }

  resp.writeHead(200, {'Content-Type':'application/json'});
  body = JSON.stringify(body);
  resp.end(body);
}

var server = http.createServer(handleReq);
server.listen(process.argv[2]);