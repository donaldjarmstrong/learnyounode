var mod = require('./6module.js');
var path = require('path');

mod(process.argv[2], process.argv[3], function (err, list) {
  	if (err)
	    return console.error('There was an error:', err)

	list.forEach(function (filename) {
		console.log(filename);
	})
})
