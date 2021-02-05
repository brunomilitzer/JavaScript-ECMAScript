/*
// Symbols
// Up trough ES5...
//Boolean
console.log((typeof(true)));
//null
console.log((typeof(null)));
//undefined
console.log((typeof(undefined)));
//Number
console.log((typeof(2)));
//String
console.log((typeof(`a`)));
//Object
console.log((typeof({})));

// New Databype!
//Symbol = a something. identifier
// primitive

// NOT A CONSTRUCTOR
const str = String(`Hello World`);
const str2 = `Hello World`;
console.log(str);
console.log(str2);
*/
/*
console.log(`a` === `a`);
console.log(Number(2) === Number(2));
console.log(2 === 2);
console.log({} === {});
console.log(undefined === undefined);
console.log(Symbol(`a`) === Symbol(`a`));

const aSymbol = Symbol();
//console.log(aSymbol);

// What is the point?
// The point... to avoid name collision.
const a = Symbol();
const b = Symbol();

console.log(a === b);
*/

const CARCOLOR = Symbol(`color`);
const CARMAKE = Symbol(`make`);
const CARMODEL = Symbol(`model`);

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    get color() {
        return this[CARCOLOR];
    }
    set color(newColor) {
        this[CARCOLOR] = newColor;
    }
}

let myCar = new Car(`Orange`, `Nissa`, `Maxima`);
console.log(myCar);
myCar.color = `Blue`;
console.log(myCar[CARCOLOR]);