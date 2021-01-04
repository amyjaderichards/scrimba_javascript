// Variable declarations are figuratively hoisted to the top of its scope

// Due to the way JS interpreter works, imagine that variable declarations are 
// moved to the top of its current scope and are then set at the point you defined them,
// either at, or before, runtime, depending on whether you're using var, let or const

// Hoisting is JS's default behaviour of moving declarations to the top of the current scope
// In JS, a variable can be declared after it has been used
// i.e. a variable can be used before it has been declared 

// Variables defined with let and const are hoisted to the top of the block, but not initialized
// i.e. the block of code is aware of the variable, but it cannot be used until it has been declared

// JS only hoists declarations, not initializations

console.log(char);
var char = 'a';
// --> undefined

let char = 'a';
if(true) {
    console.log(char);
    let char = 'b';
}
// --> cannot access 'char' before initialization

console.log(squareNumber(4));
function squareNumber(num) {
    return num**2;
}
// --> 16