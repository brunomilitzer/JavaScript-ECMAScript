/*
1. SET

Rewrite the sample code below so that every time a property is set a callback runs. Your callback will check if the property changing is employees.

If it is, ensure the datatype is an Array, a string, or Null. If anything else comes in, respond with an appropriate message.

If it's not, let it pass
 */
/*
let handler = {
    set: (target, propName, newValue) => {
        console.log(newValue);

        if (propName === "employees") {
            switch (typeof(newValue)) {
                case `string`:
                    target[propName] = newValue;
                    break;
                case `object`:
                    if ((Array.isArray(newValue)) || (newValue === null)) {
                        target[propName] = newValue;
                    } else {
                        throw new TypeError(`Invalid datatype.  Only arrays, strings, and null are valid.`);
                    }
                    break;
                default:
                    throw new TypeError(`Invalid datatype.  Only arrays, strings, and null are valid.`);
            }
        }
    }
}
let manager = {
    office: `Dubai`,
    dept: `Sales`,
    employees: 0
};

let proxyManager = new Proxy(manager, handler);

try {
    proxyManager.office = `Cork`
    proxyManager.employees = [`Bruno`,`Vanessa`,`Tales`] //updates
    proxyManager.employees = 3 // does not update
    proxyManager.employees = null //updates
    proxyManager.employees = {name: `John`} //does not update

} catch (err) {
    console.log(err);
}

console.log(proxyManager);
*/

/*
2. APPLY (node only)

You have a heavy lifting function. Every time it's called, you need to keep track in a log, but the server logs don't provide quite what you need. Write a proxy that will append to a file, the name of the function, the params sent through, and the date.
*/

/*
function importantFunction(){
    console.log("Important stuff here. No need to change.")
}

const fs = require('fs');

const importantHandler = {
    apply: (target, thisArg, argsList) => {
        fs.appendFile('proxyLog.txt', `${target.name}, ${argsList}, ${new Date()}\n`, (err) => {
            if (err) throw err;
        })
        // STILL NEED TO CALL THE FUNCTION
        target(...argsList);
    }
}

const importantProxy = new Proxy(importantFunction, importantHandler);
importantProxy(`a Param`);
 */

/*
3. GET

Adjust the following code so that anytime an internal object with accessLevel of 1 is accessed, undefined will result, regardless of the requested property.
*/

const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    },
]

const userHandler = {
    get: (target, propName) => {

        if (target[propName].accessLevel === 1) {
            return {
                username: "Access Denied",
                accessLevel: "Access Denied",
                accessCode: "Access Denied",
            }
        } else {
            return target[propName];
        }
    }
}
let userProxy = new Proxy(users, userHandler);

console.log(userProxy[0].username) // undefined
console.log(userProxy[0].accessCode) // undefined
console.log(userProxy[1].accessCode) //2345
console.log(userProxy[2].username) //Harold
