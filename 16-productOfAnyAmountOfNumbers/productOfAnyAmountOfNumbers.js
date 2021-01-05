function productOfAnyAmountOfNumbers(...args) {
  var prod = 1;
  args.forEach(el => {
    prod *= el;
  });
  return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;