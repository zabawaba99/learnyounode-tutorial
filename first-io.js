var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var content = buf.toString('utf8');

console.log(content.split('\n').length - 1);