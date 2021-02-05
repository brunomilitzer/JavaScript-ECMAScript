// Object.values() and Object.entries()
/*
const footballer = {
    name: "Pele",
    position: "Forward",
    club: "Santos",
    scoringAverage: 3.3
}
*/

/*const footballerEntries = Object.entries(footballer);
console.log(footballerEntries);
console.log(footballerEntries[0][0]);*/
/*

const footballerVals = Object.values(footballer);
console.log(footballerVals);
*/

/*
const footballerVals = [];

for (prop in footballer) {
    footballerVals.push(footballer[prop])
}

console.log(footballerVals);
*/

const name = "Wayne Gretsky";
/*
padEnd takes 2 args:
1. How long the string to be
2. What should be added in the extra characters... default: " ";
// DOES NOT MUTATE THE STRING
*/

/*
name.padEnd(20);
console.log(name.padEnd(20, "x") + "test");
console.log(name.padEnd(2, "x"));
console.log(name.padStart(20,"z"));
console.log(name);

*/

// Object.getOwnPropertyDescriptors()
/*
const footballer = {
    name: "Pele",
    position: "Forward",
    club: "Santos",
    scoringAverage: 3.3
}

descriptors = Object.getOwnPropertyDescriptors(footballer);
console.log(descriptors);*/

// Trailing commas in functions
// already existed for arrays, es1

const worldCupClubs = [
    `Brazil`,
    `Argentina`,
    `Uruguay`
]

// ES5, ADDED FOR OBJECTS
const brazil = {
    name: "Brazil",
    place: "1st",
}
console.log(brazil);

//ES8, added for functions
function sum(x, y, ) {
    return x + y;
}

console.log(sum(2, 3,));
