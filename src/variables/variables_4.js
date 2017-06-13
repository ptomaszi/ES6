let x = 3;

function test(value){
    if (value){
        let x = Math.random();
        return x;
    }
    return x;
}

let result = test(false);

console.log("Let result from function = " + result);
console.log("Let result x = " + x);