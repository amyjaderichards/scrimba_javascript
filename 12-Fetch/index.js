// Fetch is built on top of promises
// We can use fetch to make http requests from the web browser,
// which is useful for grabbing data from an API etc.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())  // converts the response object promise to json
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.ndjncjksanck.djdksdmnjaksdna')
    .then(response => response.json())
    .catch(err => console.log('Error: ' + err));