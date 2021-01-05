
// This function accepts a function and logs the time it takes for the function to execute
function timeFn(fn) {
    const beginTime = performance.now();
    fn();
    const endTime = performance.now();
    console.log('Time Took: ', endTime - beginTime);
}

// This function just runs a for-loop 100,000 times
// FUNCTION DECLARATION
function looper() {
    for (let i = 0; i < 100000; i++) { }
}

// Call timeFn with looper()
// FUNCTION EXPRESSION
timeFn(function() {
    for(let i = 0; i < 100000; i++) { }
});