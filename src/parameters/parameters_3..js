function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

logAllArguments(1,2,3,4);

function logAllArguments1(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

logAllArguments1(1,2,3,4);