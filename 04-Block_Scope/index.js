// let and const are block scope - they are bound to the block they're defined in
// var is not

if(true) {
    var x = 2;
}

console.log(x); //ReferenceError



var x;
if(false) {
    x = 2;
}

console.log(x); //undefined