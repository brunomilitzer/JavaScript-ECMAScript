// Map is just a key-value pair.  It is far more protected than a regular object
// It also comes with some cool methods specific to a map.
// It is also an iterable.

const myContactsObj = {
    "Bruno" : "087-175-3298",
    "Vanessa" : "087-371-8394"
}

/*
for (value of myContactsObj) {
    console.log(value);
}
*/

let keyFunction = () => {
    console.log("Hello World");
}

let myContacts = new Map();
myContacts.set("Bruno", "087-175-3298");

const bruno = myContacts.get("Bruno");
console.log(bruno);

myContacts.set(keyFunction, "Haha I just used a function as a key");
const haha = myContacts.get(keyFunction);
console.log(haha);

myContacts.set(myContactsObj, "My Object");

let obj = myContacts.get(myContactsObj);
console.log(obj);

console.log(myContacts.size);

// get and set methods

for (value of myContacts) {
    console.log(value);
}

console.log(myContacts.entries());

myContacts.forEach((value) => {
    console.log(value);
})

// keys method

console.log(myContacts.keys());
console.log(myContacts.values());

// clear method (clear the map)
myContacts.clear();
console.log(myContacts);