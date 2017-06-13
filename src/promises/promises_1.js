// Example 1 - Simple promise
function asyncFunc() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve('DONE'), 100);
    });
}

asyncFunc()
.then(x => console.log('Result: ' + x));


// Example 2 - HTTP request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

function httpGet(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {                
                if (this.status === 200) {
                    // Success
                    resolve(this.response);
                } else {
                    // Something went wrong (404 etc.)
                    reject(new Error("Operation failed."));
                }
            };
            request.onerror = function () {
                reject(new Error(
                    'XMLHttpRequest Error: '+this.statusText));
            };
            request.open('GET', url);
            request.send();
        });
}

httpGet('.src/promises/data.json')
.then(
    function (value) {
        console.log('Contents: ' + value);
    },
    function (reason) {
        console.error('Something went wrong', reason);
    });

// Example 3 - Delay
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

delay(5000).then(function () {
    console.log('5 seconds have passed!')
});