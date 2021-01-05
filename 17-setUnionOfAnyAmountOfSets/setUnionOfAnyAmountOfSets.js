function setUnionOfAnyAmountOfSets(...args) {
  let union = [];
  args.forEach(el => union = new Set([...union, ...el]));
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;