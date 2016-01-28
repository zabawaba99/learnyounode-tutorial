var mymodule = require('./make-it-module1.js');

mymodule(process.argv[2], process.argv[3], function(err, list){
  if (err) {
      console.log("Error filtering list: ", err.toString());
      return;
  }
  console.log(list.join('\n'));
});