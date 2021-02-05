// what is a promise and why should I care?
// - async
// - single threaded
// - non-blocking
// - io/event-driven
// - callbacks
// - code you pass around for another function to run later

// callback Hell
/*
$.ajax(url1, data1)=>{
    // do stuff with data1
    $.ajax(url2, data2)=>{
        // do stuff with data2
        $.ajax(url3, data3)=>{

        }
    }
}
*/

// Does a promise make my code faster?
// - No. In fact, I think it makes it slower.
// Does a promise give me new powers?
// - No. JS runs exactly the same as always.
// Uhh...why would I want to use one then?
// What is a promise?

// All a promise is, is a JavaScript constructor that gives you a few cool methods.
// - then
// - catch
// - All
// - race
// - resolve, reject
// a promise constructor takes 1 arg:
// 1. callback
// the callback iteself has 2 args
    // 1. resolve
    // 2. reject
// Now that we are inside the callback, the code starts running!

/*

let myFirstPromes = new Promise((resolve, reject) => {
    console.log("Hey, I'm running!");
    console.log("Hey, I'm am also running!");

    // ajax
    // http
    // sql
    // nosql
    const lang = [
        'JS',
        'Java',
        'Python'
    ]
    reject("I did not finish"); // Something went wrong!
    resolve(lang); // I'm done!
});
console.log(myFirstPromes);

// the then will go on the promise OUTSIDE of the promise.
// it will keep an eye on the promise.
// when the resolve callback is run inside of the promise, the then will
// fire off it's callback.
// then takes 1 arg: callback to run
myFirstPromes.then((promiseData) => {
    console.log(promiseData)
})

myFirstPromes.catch((promiseError) => {
    console.log(promiseError);
})

console.log("==================================")
console.log("I'm the last line in the program!");
console.log("==================================");
 */

function one() {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve("2 seconds has passed")
        }, 2000);
    })
}

function two() {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve("1 second has passed")
        }, 1000);
    })
}

const promiseOne = one();
const promiseTwo = two();

promiseOne.then((msgFromPromise) => {
    console.log("=====2=====");
    console.log(msgFromPromise);
    console.log(promiseOne);
});

promiseTwo.then((msgFromPromise) => {
    console.log("=====1=====");
    console.log(msgFromPromise);
    console.log(promiseTwo);
});

console.log(promiseOne);
console.log(promiseTwo);

const promiseArray = [promiseOne, promiseTwo];
console.log(promiseArray);

// all method...
// Promise.all takes 1 arg:
// an array of Promises
// we run then just like awlays
// this will wait until ALL of the promises in the array has resolved
Promise.all(promiseArray).then((data) => {
    console.log("All the promise are done");
    console.log(data);
});

// race method...
// Promise.race takes 1 arg:
// an array of Promises
// we run then just like always
// this will run as soon as ANY promise is resolved

Promise.race(promiseArray).then((data) => {
    console.log("One of the promise are done");
    console.log(data);
});