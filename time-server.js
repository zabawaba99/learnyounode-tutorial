var net = require('net');
var strftime = require('strftime');

var handleReq = function(socket) {
  var date = strftime('%Y-%m-%d %H:%M', new Date())
  console.log(date)
  socket.end(date);
}

var server = net.createServer(handleReq);
server.listen(process.argv[2]);