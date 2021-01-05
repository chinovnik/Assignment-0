function isPalindrome(word) {
  return word.split('').join('') == word.split('').reverse().join('');
}

// Do not edit this line;
module.exports = isPalindrome;