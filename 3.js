var fs = require("fs");

var fileToRead = process.argv[2];

if (!fileToRead) {
	console.log('filename is required');
	return;
}

var buff = fs.readFileSync(fileToRead);

var newLineCnt = buff.toString().split('').reduce(function (prev, cur) {
	if (cur == '\n') {
		return prev + 1;
	} else {
		return prev;
	}
}, 0);

console.log(newLineCnt);