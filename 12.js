var fs = require('fs');
var http = require('http')
var Transform = require('stream').Transform;

function transformToUppercase () {
    var d = new Transform();
    d._transform = function(data, encoding, done) {
        this.push(data.toString().toUpperCase());
        done();
    };
    return d;
}

var server = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		req.pipe(transformToUppercase()).pipe(res);
    }
});

server.listen(process.argv[2])