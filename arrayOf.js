// Array.of()

const  arr1 = Array.of(7);
console.log(arr1);

const  arr2 = Array(7);
console.log(arr2);

const  arr3 = Array.of(7, "Hulk", [14, 31, 2], {sport: "soccer"});
console.log(arr3);

const  arr4 = Array(7, "Hulk", [14, 31, 2], {sport: "soccer"});
console.log(arr4);

// Polyfill
if(!Array.of) {
    Array.of = function () {
        return Array.prototype.slice.call(arguments);
    }
}