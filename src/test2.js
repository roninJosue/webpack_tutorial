'use strict'
let x = 10;

function test()
{
  if(x > 20){
   let x = 50;
  }
  console.log(x);
}

test();
console.log(x);