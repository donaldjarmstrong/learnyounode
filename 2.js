var d = function (prev, curr, idx, arr) {
	return parseInt(prev) + parseInt(curr);
}

console.log(process.argv.slice(2).reduce(d, 0));