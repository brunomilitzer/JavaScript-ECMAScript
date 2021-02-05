// Weak Set
/*
Unlike set, WeakSet can only hold objects
Like WeakMap, the primary gain, is garbage collection. Uses weak reference
It is not iterable, there is no get method, size is ALWAYS 0
 */

let harry = {
    name: `Harry`,
    id: 12
}

let sherry = {
    name: `Sherry`,
    id: 7
}
let employeeId = new WeakSet();
employeeId.add(harry);
employeeId.add(sherry);

console.log(employeeId.has(harry));
console.log(employeeId.has(undefined));
