// submitted solution

var numbers = process.argv.slice(2);
var sum = numbers.reduce(function(previousValue, currentValue) {
  return +previousValue + +currentValue;
});

console.log(sum);

// official solution

var result = 0

for (var i = 2; i < process.argv.length; i++)
 result += Number(process.argv[i])

console.log(result)