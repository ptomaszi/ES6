//Example 1
const iterable = ['a', 'b'];
const [x, y] = iterable;
console.log(x);
console.log(y);

// Example 2
const iterable1 = [1,2,3,4,5,6];
const [,,x1,,y1,] = iterable1;
console.log(x1);
console.log(y1);

// Example 3
const [x2,...y2] = 'abc';
console.log(x2);
console.log(y2);

// Example 4
const {foo: x3=3, bar: y3} = {};
console.log(x3);
console.log(y3);