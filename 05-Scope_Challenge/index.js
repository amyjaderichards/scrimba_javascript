const vegetable = 'carrot';
let value;

if(hoisted) {
    var fruit = 'apple';
}

if(!hoisted) {
    var fruit = 'banana';
}

function setString(str) {
    window.str = str;
}

function addTenToNum(num) {
    var ten = 10;
    value = ten + num;
}

setString('Hello World!');
addTenToNum(5)

var str = window.str;

console.log('1: ', hoisted);        // 1:
console.log('2: ', fruit);          // 2: banana
console.log('3: ', value);          // 3: 15
console.log('4: ' , vegetable);     // 4: carrot
console.log('5: ', str);            // 5: Hello World
console.log('6: ', ten);            // ten is not defined 

var hoisted = true;