var fs = require('fs');
var path = require('path');

var filterFiles = function(directory, fileExt, callback) {
  fs.readdir(directory, function(err, files) {
    if (err) {
      return callback(err);;
    }

    callback(null, files.filter(function(file) {
      return path.extname(file) === '.' + fileExt
    }));
  });
}

module.exports = filterFiles