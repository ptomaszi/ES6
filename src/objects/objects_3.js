// Example 1 - Static keyword

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static get ZERO() {
        return new Point(0, 0);
    }
}

console.log(Point.ZERO);

// Example 2 - Getters and setters

class MyClass {
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

const inst = new MyClass();
inst.prop = 123;
console.log(inst.prop);
