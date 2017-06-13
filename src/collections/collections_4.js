// Example 1 - Iterators
let foo = {
  [Symbol.iterator]: () => ({
    items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
    next: function next () {
      return {
        done: this.items.length === 0,
        value: this.items.shift()
      }
    }
  })
}

for (let pony of foo) {
  console.log(pony);
}

// Example 2 - Generators
function* idMaker() {
  let index = 0;
  while(true)
    yield index++;
}

let gen = idMaker();

console.log(gen.next().value); 
console.log(gen.next().value);
console.log(gen.next().value);

// Example 3 - Iterator and generator
let myIterable  = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
}

console.log(...myIterable);

// Example 4 - Fibonacci generator

function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next(true).value); 
console.log(sequence.next().value);     
console.log(sequence.next().value);     
console.log(sequence.next().value);