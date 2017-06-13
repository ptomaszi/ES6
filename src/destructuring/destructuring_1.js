// Example 1
const obj = { first: 'Tomasz', last: 'Polecki' };

let {first, last} = obj;
console.log(first + ' ' + last);

const {first: f, last: l} = obj;
console.log(f + ' ' + l);

// Example 2
const obj1 = { 
    a: [{ 
        foo: 123, 
        bar: 'abc' 
    }, {}], 
    b: true 
};
const { a: [{foo: f1}] } = obj1;
console.log(f1);