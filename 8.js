var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');

	response.on('error', function (e) {
		console.error(e);
	});
	response.on('data', function (d) {
		console.log(d);
	});
	response.on('end', function (e) {
	});
});