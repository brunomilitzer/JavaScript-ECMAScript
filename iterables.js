// Iterables
// 1. Iterables can be iterated for..of
// 2. Iterables have an iterator defined for them
// Default: Array, Map, WeakMap, String, TypedArray, Set, WeakSet
// 3. It has a [Symbol.iterator] property

const aString = "Hello!";
console.log(aString[Symbol.iterator]);
const obj = {name: "Bruno"};
console.log(obj[Symbol.iterator]);

for(let letter of aString) {
    console.log(letter);
}

for (let i = 0; i < aString.length; i++) {
    console.log(aString[i]);
}

for (let key in aString) {
    console.log(aString[key]);
}

const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}

console.log([...iterable1]);

for (let value of iterable1) {
    console.log(value);
}