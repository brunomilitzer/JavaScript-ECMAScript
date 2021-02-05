// Set
// A set is similar to an array... except it's not an array. (no push, no pop, etc.)
// It can hold any data type
// All elements are unique

//let employeeId = [`a12`, `e7`, `c2`, `a12`];
let employeeId = new Set([`a12`, `e7`, `c2`, `a12`]);
console.log(employeeId);
employeeId.forEach((emp) => console.log(emp));

let employeeSet = new Set();
console.log(employeeSet);

// size property (length in array)
employeeSet.add({
    name: `John`,
    position: `CTO`,
    tenure: `12 years`
})

employeeSet.add({
    name: `John`,
    position: `CTO`,
    tenure: `12 years`
})

console.log(employeeSet);

/*
add
clear - empty the Set
delete a particular element
entries = like Map, it returns iterable, each element is the iterable
is an array, [0] key = value, [1] value = value
 */