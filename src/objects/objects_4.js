// Example 1 - Private data
const _private1 = Symbol('private1');
const _private2 = Symbol('private2');

class MyClass {
    constructor(val1, val2) {
        this[_private1] = val1;
        this[_private2] = val2;
    }
    start() {
        this[_private1]--;
        console.log(this[_private1]);
        console.log(this[_private2]);
    }
}

const obj = new MyClass(2,5);
obj.start();

// Example 2 - A unique value oposite to a standard string literal
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}

const output = getComplement(COLOR_BLUE);
console.log(output);

// Example 3 - Property keys
const MY_KEY = Symbol();
const test = {};

test[MY_KEY] = 123;
console.log(test[MY_KEY]);

// Example 4 - Method definitions
const FOO = Symbol();
const test1 = {
    [FOO]() {
        return 'bar';
    }
};
console.log(test1[FOO]());