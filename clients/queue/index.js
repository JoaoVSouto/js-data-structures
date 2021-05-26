const Queue = require('../../implementations/queue');

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString()); // John,Jack

queue.enqueue('Camila');

console.log(queue.toString()); // John,Jack,Camila
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();

console.log(queue.toString()); // Camila
