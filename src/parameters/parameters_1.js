// Example 1
function foo(x, y) {
    x = x || 0;
    y = y || 0; 

    console.log(x);
    console.log(y);
}

foo();

// Example 2
function foo1(x=0, y=0) {
    console.log(x);
    console.log(y);
}

foo1();