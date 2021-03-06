'use strict';

// CASE 1: The object is mutable and the variable can be reassigned.
let o1 = { foo: 'bar' };

// Mutate the object
o1.foo = 'something different';

// Reassign the variable
o1 = { message: "I'm a completely new object" };


// CASE 2: The object is still mutable but the variable cannot be reassigned.
const o2 = { foo: 'baz' };

// Can still mutate the object
o2.foo = 'Something different, yet again';

// Cannot reassign the variable
// o2 = { message: 'I will cause an error if you uncomment me' }; // Error!


// CASE 3: The object is immutable but the variable can be reassigned.
let o3 = Object.freeze({ foo: "Can't mutate me" });

// Cannot mutate the object
// o3.foo = 'Come on, uncomment me. I dare ya!'; // Error!

// Can still reassign the variable
o3 = { message: "I'm some other object, and I'm even mutable -- so take that!" };


// CASE 4: The object is immutable and the variable cannot be reassigned. This is what we want!!!!!!!!
const o4 = Object.freeze({ foo: 'never going to change me' });

// Cannot mutate the object
// o4.foo = 'talk to the hand' // Error!

// Cannot reassign the variable
// o4 = { message: "ain't gonna happen, sorry" }; // Error

function canRide(height) {
  return height >= constants.heightRequirement;
}

//////////////

'use strict';

// Optimized for tail call optimization.
function factorial(n, product = 1) {
  if (n === 0) {
    return product;
  }
  return factorial(n - 1, product * n)
}

///////////////
function add(a, b){
   return a + b;
}
console.log(add(1, 2));

function curryingAdd(a){
   return function(b){
      return a + b;
   }
}

console.log(curryingAdd(1)(2));