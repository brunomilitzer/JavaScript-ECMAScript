// Value and reference
// Primitive and Objects
// string, number, boolean, null, undefined, symbol

let str = `Popeye`
let numb = 3;
let bool = true;
let n = null;
let undef = undefined;
let s = Symbol(`mySymbol`);

let name = str; // We have copied the VALUE of str
str = `Olive Oil`;
console.log(name);

//Objets are store by reference
let obj = {
    name: `Popeye`
}

let cartoon = obj;  // We didn't make a copy of the value of obj
// we made a copy what's in obj... which is a reference

console.log(obj);
console.log(cartoon);

cartoon.girlfriend = `Olive Oil`;

console.log(obj);
console.log(cartoon);

let arr = [1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr2); // I didn't change this!

let name2 = `Garfield`;
console.log(name2);
name2.toUpperCase();
console.log(name2);
console.log(name2.toUpperCase());

let x = 5;
function sum(x, y) {
    x = x + y;
}
sum(x, 3);
console.log(x);

