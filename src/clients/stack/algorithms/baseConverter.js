const baseConverter = require('../../../implementations/stack/algorithms/baseConverter');

console.log('100345 to base 2 =', baseConverter(100345));
console.log('100345 to base 8 =', baseConverter(100345, 8));
console.log('100345 to base 16 =', baseConverter(100345, 16));
console.log('100345 to base 35 =', baseConverter(100345, 35));
