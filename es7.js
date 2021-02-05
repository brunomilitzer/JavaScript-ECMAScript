// ES7 - Expnentiation, Includes, and Rest paramater
// destructuring

/*
const handler = {
    get: (target, prop) => {

    },
    set: (target, prop) => {

    },

    // Removed
    enumerate: (target, prop) => {

    }

}
const proxy1 = new Proxy({}, handler);
*/

/*
//Expnentiation
const x = 2 * 2 * 2 * 2 * 2;
const x2 = 2 ** 5;
console.log(x);
console.log(x2);

const a = 3 ** 2.5
const b = 100 ** -1

console.log(a);
console.log(b);

const c = NaN ** 3
console.log(c);

const d = 2 ** 3 ** 2;
const e = 2 ** (3 ** 2);
const f = (2 ** 3) ** 2;
console.log(d);
console.log(e);
console.log(f);

//const g = -2 ** 2;
const g = -(2 ** 2);

console.log(g);

// Includes
// is essentially the same thing as indexOf
// except!!! it returns a boolean
// 1. Motivation
const arr = [1, 2, 3, 4, 5];

if (arr.indexOf(2) > -1) {
    console.log("Number found!");
} else {
    console.log("Number not found!");
}

const inArray = arr.includes(2);
console.log(inArray);
*/

/*
console.log(2 === 2);
console.log(2.6 === 2.6);
console.log(2.6 === 2.65);
console.log(NaN === NaN);

const arr = [1, 2, 3, 4, 5, NaN];

console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));
 */

// Destructuring rest paramaters
const someJSON = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "Manchester United"
}
/*
console name = someJSON.name;
console position = someJSON.position;
console club = someJSON.club;
*/
const { name, position, club } = someJSON;
console.log(name);

function sum(...[a, b]) {
    /*console.log(numbers);*/
    return a + b;
}

console.log(sum(2,3));