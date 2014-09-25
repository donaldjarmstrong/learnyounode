var fs = require('fs');
var path = require('path');

module.exports = function (dirname, filter, callback) {
	fs.readdir(dirname, function (err, data) {
		if (err) {
			callback(err);
		} else {
			callback(null, data.filter(function (filename) {
				return (path.extname(filename) == '.' + filter);
			}));
		}
	});
}