// Blocks

//IIFE
console.log("test hello");
(function (){
    var tmp = 'test';
    console.log(tmp);
}());

{
    let tmp1 = 'test1';
    console.log(tmp1);
}
//console.log(tmp1);

// Arrow function examples

//ES5
var arr = [1, 2, 3];
var squares = arr.map(function (x) { return x * x });
console.log(squares);

//ES6
const arr1 = [1, 2, 3];
const squares1 = arr1.map(x => x * x);
console.log(squares1);