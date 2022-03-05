const Deque = require('../');

function palindromeChecker(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return false;
  }

  const deque = new Deque();

  const lowerString = string.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

module.exports = palindromeChecker;
