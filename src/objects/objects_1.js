// Example 1 - Method definitions inside the object.

//ES5
var obj = {
    foo: function () {        
        console.log('foo from obj');
    },
    bar: function () {
        this.foo();
    }
}

obj.bar();


//ES6
const obj1 = {
    foo() {        
        console.log('foo from obj1');
    },
    bar() {
        this.foo();
    },
}

obj1.bar();