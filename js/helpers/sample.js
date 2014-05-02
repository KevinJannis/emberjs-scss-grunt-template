var helper = function(input) {
  // Do stuff with the input
  var output = doSomething(input);
  return output;
};

var doSomething = function(input) {
  // This is a private function
  return (input + '').toUpperCase();
};

module.exports = helper;
