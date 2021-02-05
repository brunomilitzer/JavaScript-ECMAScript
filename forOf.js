// for..of

const arr = [1, 3, 5, 98, 12, 99];

/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//for..in
console.log('---------------')

for (let key in arr) {
    console.log(arr[key]);
}

console.log('---------------')

const obj = {
    name: "Bruno",
    occ: "Software Engineer",
    language: "Java"
}

for (let key in obj) {
    console.log(obj[key]);
}*/

//Array.prototype.forEach()
/*
console.log('---------------')
arr.forEach((value, i) => {
    console.log(value);
    console.log("Index", i)
})
*/

// for..in iterates over the keys of the iterator
/*for (let key in arr) {
    console.log(arr[key]);
}

console.log('---------------')

// for..of iterates over the values of the iterator
for (let value of arr) {
    console.log(value);
}*/

const str = 'Vanessa de Garcez';

console.log('---------------')
for (let letter of str) {
    console.log(letter);
}

console.log('---------------')
for (let letter in str) {
    console.log(letter);
}
