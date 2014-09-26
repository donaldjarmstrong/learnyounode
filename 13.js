var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var options = url.parse(req.url, true)

	if (req.method == 'GET') {
		var date = new Date(options.query.iso);
		res.writeHead(200, { 'Content-Type': 'application/json' });

		if (options.pathname == '/api/parsetime') {
			res.end(JSON.stringify({ 'hour' : date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }));
	    }

	    if (options.pathname == '/api/unixtime') {
			res.end(JSON.stringify({ 'unixtime' : date.getTime() }));
	    }
	}
});

server.listen(process.argv[2]);