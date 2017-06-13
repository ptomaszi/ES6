// this inside the inner function.

'use strict';

var numbers = {  
   numberA: 5,
   numberB: 10,
   sum: function() {     
     function calculate() {       
       return this.numberA + this.numberB;
     }
     
     return calculate();
   }
};

var result = numbers.sum();
console.log(result);