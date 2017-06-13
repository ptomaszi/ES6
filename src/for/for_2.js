//Example 1
const arr = [];
for (var i of [0, 1, 2]) {
    arr.push(() => i);
}
var result = arr.map(x => x());
console.log(result);

//Example 2
const arr1 = [];
for (const i of [0, 1, 2]) {
    arr1.push(() => i);
}
var result1 = arr1.map(x => x());
console.log(result1);