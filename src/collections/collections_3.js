// Example 1 - Maps
const map = new Map();
const KEY = {};

map.set(KEY, 123);
console.log(map.get(KEY));
console.log(map.has(KEY));
console.log(map.delete(KEY));
console.log(map.has(KEY));

// Example 2 - Maps for...of
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

// Example 3 - Sets
const arr = [{test:5}, {test:10},{test:5}];
const unique = [...new Set(arr)];

console.log(unique);