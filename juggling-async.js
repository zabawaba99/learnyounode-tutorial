var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;
var getResp = function(url, index) {
  http.get(url, function(response){
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.log("Error getting response: ", err);
      }

      results[index] = data.toString();
      count++;

      if (count === urls.length) {
        console.log(results.join('\n'));
      }
    }));
  });
}

[process.argv[2], process.argv[3], process.argv[4]].forEach(function(url, index){
  getResp(url, index);
});