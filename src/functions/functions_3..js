'use strict';

//Function invocation
class Point {  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  log() {    
    setTimeout(function(){      
      console.log(this.x + ':' + this.y);
    }, 1000);
  }
}

var myPoint = new Point(95, 165);  
myPoint.log();

//Arrow function
class Point1 {  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  log() {    
    setTimeout(()=> {      
      console.log(this.x + ':' + this.y);
    }, 1000);
  }
}
var myPoint = new Point1(95, 165);  
myPoint.log();
