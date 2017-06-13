// Example 1 - Base classes

//ES5
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function () {
    return 'Person called ' + this.name;
};

var p = new Person('Tomasz');
var output = p.describe();
console.log(output);

//ES6
class Person1 {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+ this.name;
    }
}

const p1 = new Person1('Tomasz');
const output1 = p1.describe();
console.log(output1);

// Example 2 - Derived class

//ES6

class Employee extends Person1 {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}

const e = new Employee('Tomasz', 'Mr');
const output2 = e.describe();
console.log(output2);