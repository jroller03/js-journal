export function Entry(input){
  this.input = input;
  this.inputArray = input.split(" ");
}

Entry.prototype.counter = function() {
  var userInputArray = this.inputArray;
  var inputLength = userInputArray.length;
  return inputLength;
};
