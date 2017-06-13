var x = 3;

function test(value){
    if (value){
        var x = Math.random();
        return x;
    }
    return x;
}

var result = test(false);

console.log("Var result from function = " + result);
console.log("Var result x = " + x);