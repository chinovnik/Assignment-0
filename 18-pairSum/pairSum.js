function pairSum(nums, target) {
  if (nums.length <= 1) throw "Not enough numbers. At least 2 expected.";
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; i < nums.length; i++) {
      if (nums[i] + nums[j] == target) return true;
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;