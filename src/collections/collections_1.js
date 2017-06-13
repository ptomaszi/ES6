// Example 1 - Array.from()
const arrayLike = { length: 2, 0: 'a', 1: 'b' };
const arr = Array.from(arrayLike);
console.log(arr);

// Example 2 - Array.of()
const myArr1 = Array.of(1);
const myArr2 = Array.of(1, 2, 3);
console.log(myArr1);
console.log(myArr2);

// Example 3 - Array.prototype.keys()
const keys = Array.from(['a', 'b'].keys());
console.log(keys);

// Example 4 - Array.prototype.values()
//const values = Array.from(['a', 'b'].values()); // [a, b]

// Example 5 - Array.prototype.entries()
const entries = Array.from(['a', 'b'].entries());
console.log(entries);

// Example 6 - For loop destructuring
for (const [index, element] of ['a', 'b'].entries()) {
    console.log(index, element);
}