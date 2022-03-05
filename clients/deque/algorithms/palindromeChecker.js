const palindromeChecker = require('../../../implementations/deque/algorithms/palindromeChecker');

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log(
  'Was it a car or a cat I saw',
  palindromeChecker('Was it a car or a cat I saw')
);
console.log('Step on no pets', palindromeChecker('Step on no pets'));
console.log(
  'This is not a palindrome',
  palindromeChecker('This is not a palindrome')
);
