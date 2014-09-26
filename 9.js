var http = require('http');

var get = function (url, cb) {
	var bufferedData = "";

	http.get(url, function (response) {
		response.on('error', function (e) {
			cb(err);
		});

		response.on('data', function (d) {
			bufferedData = bufferedData + d.toString();
		});

		response.on('end', function (e) {
			cb(null, bufferedData);
		});
	});
}

get(process.argv[2], function (err, firstUrl) {
	get(process.argv[3], function (err, secondUrl) {
		get(process.argv[4], function (err, thirdUrl) {
			console.log(firstUrl);
			console.log(secondUrl);
			console.log(thirdUrl);
		})	
	})	
})