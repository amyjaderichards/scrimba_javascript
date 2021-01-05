var globalVar = 'I am a global variable!';

function concatString(str) {
    window.concat = str + ' ' + globalVar;
}

function logString() {
    console.log(window.concat);
}

concatString('I am hungry');

logString();