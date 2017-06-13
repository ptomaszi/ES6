'use strict';

// Function invocation

function multiply(a, b) {    
  console.log(this === undefined);
  return a * b;
}

multiply(2, 5);

// Method invocation

class Planet {  
  constructor(name) {
    this.name = name;    
  }
  getName() {
    console.log(this === earth);
    return this.name;
  }
}

var earth = new Planet('Earth');  //Constructor invocation
earth.getName();

// Separating method from its object

var getNameFn = earth.getName;
setTimeout(getNameFn, 100);
setTimeout(getNameFn.bind(earth), 100);