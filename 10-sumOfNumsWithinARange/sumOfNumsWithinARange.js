function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;

  nums.forEach(el => {
    if (el >= start  && el <= end) count++;
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;