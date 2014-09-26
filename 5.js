var fs = require('fs');
var path = require('path');

var dirName = process.argv[2]
var filter = process.argv[3]

fs.readdir(dirName, function (err, list) {
	list.forEach(function (filename) {
		if (path.extname(filename) == '.' + filter) {
			console.log(filename);
		}
	})
})
