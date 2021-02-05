// Callbacks
// functions = 1st clas objects
// - Pass them around
// - store them inside a variable
const printUpper = function print(text) {
    console.log(text.toUpperCase());
}

const printNumber = function (number) {
    console.log(number);
}

function run(callback, input) {
    callback(input);
}

console.log((printUpper))
run(printUpper, `Hello World`);
//printUpper(`Hello World`);

// somewhere in the bolws of jquery, there is...
const $ = function (selector) {
    if (selector.indexOf('#') > -1) {
        document.getElementById(selector);
    }
}
$.prototype.click = function (callback) {
    // jquery do some stuff...
    callback();
}