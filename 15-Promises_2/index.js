const helloPromise = new Promise((resolve, reject) => {
    resolve('Hello');
})

const worldPromise = new Promise((resolve, reject) => {
    resolve('World')
})

// METHOD 1
helloPromise.then(result => {
    worldPromise.then(result2 => {
        console.log(result + ' ' + result2);
    });
});

// METHOD 2
Promise.all([
    helloPromise,
    worldPromise
]).then(result => {
    console.log(result[0] + ' ' + result[1]);
})

// METHOD 3 (IIFE)
(async () => {
    console.log(await helloPromise + ' ' + await worldPromise)
})();