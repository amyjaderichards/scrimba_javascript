function fib(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};

// function expression
const fibExpression = function(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};

// arrow function
const fibArrow = num => {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

console.log(fib(10)); // 55
console.log(fibExpression(10)); // 55
console.log(fibArrow(10)); // 55


const tenthFib = (function(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
})(10);

console.log(tenthFib); // 55