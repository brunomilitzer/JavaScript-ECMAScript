// Array.prototype.fill()
// Mutating function

const arr1 = [2, 3, 5, "a", 11, "b", 9, 3];
// args
//1. Value you want to fill in
//2. Starting index for that value
//3. Stopping index
/*arr1.fill("c", 3, 4);
console.log(arr1);*/

/*const arr2 = [1, 2, 3, 4];
console.log(arr2.slice(1, 3));
console.log(arr2);*/
/*
const arr3 = [1, 4, 6, "a", 17, "b", 6, 6];
arr3.fill("c", -3);
console.log(arr3);*/

// similar to splcie...
let discountMonths = ["Jan", "Feb", "April", "Nov"];
// 1. Where to start
// 2. how many to delete
// 3. Where to start
discountMonths.splice(3, 0, 'August');
console.log(discountMonths);