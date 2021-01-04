// Scope is the area in which a variable is visible

function addTwenty(num) {
    var add = 20;
    return num + add;
}


console.log(num);
let num = 5;
// --> cannot access 'num' before initialization

console.log(num);
var num = 5;
// --> undefined

// Declarations made using let and const are evaluated at runtime, var declarations are not