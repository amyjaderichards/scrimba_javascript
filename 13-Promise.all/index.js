// Promise.all accepts an array of promises
// response.json() returns a Promise

Promise.all([
    fetch('https://jsonplaceholders.typicode.com/todos/1')
    .then(response => response.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json()),

    new Promise((resolve, reject) => {
        document.getElementById('btn')
        .addEventListener('click', () => resolve('CLICKED'));
    })
]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})