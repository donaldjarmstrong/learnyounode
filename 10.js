var net = require('net');
var moment = require('moment');

var server = net.createServer(function (socket) {
  // socket handling logic
  var data = moment().format("YYYY-MM-DD hh:mm");

  socket.end(data);
})

server.listen(process.argv[2])