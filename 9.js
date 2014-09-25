var http = require('http');

http.get(process.argv[2], function (response) {
	var bufferedData = "";

	response.setEncoding('utf8');

	response.on('error', function (e) {
		console.error(e);
	});
	response.on('data', function (d) {
		bufferedData = bufferedData + d.toString();
	});
	response.on('end', function (e) {
		console.log(bufferedData.length);
		console.log(bufferedData);
	});
});