//Promises aim to simplify asynchronous programming
//They provide a convenient interface to deal with asynchronous code,
//where asynchronous code is code that waits for something to happen before it completes
// i.e. user clicking a button, http request returning

const waitMs = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Waited ${ms} milliseconds'), ms);
});

waitMs(5000)
    .then((message) => console.log(message))
    .catch(() => console.log('Something went wrong'));