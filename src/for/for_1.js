// Example 1
var arr = ['a', 'b', 'c'];
for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}

// Example 2
arr.forEach(function (elem) {
    console.log(elem);
});

// Example 3
const arr1 = ['a', 'b', 'c'];
for (const elem of arr1) {
    console.log(elem);
}

// Example 4
for (const [index, elem] of arr1.entries()) {
    console.log(index+'. '+elem);
}
