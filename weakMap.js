// weak Map
// 1. weakMap will allow garbage collection, if the key has no reference
// 2. It's not iterable, and only has get, set, has, delete

/*let aStrongMap = new Map();
let friend = {name: `Alois`};
aStrongMap.set(friend, `My Best Friend`);
console.log(aStrongMap.get(friend));

friend = null;
console.log(aStrongMap.entries());

let aWeakMap = new WeakMap();
let anotherFriend = {friend: `Tom`};
aWeakMap.set(anotherFriend, `Another Best Friend`);
console.log(aWeakMap.get(anotherFriend));

anotherFriend = null;
console.log(aWeakMap.get(anotherFriend));*/

const userData = {
    numberOfUsers: 2,
    status: 200,
    users: [
        {
            name: `Tales`,
            number: `1234567`
        },
        {
            name: `Vanessa`,
            number: `404044`
        }
    ]
}

let weakMap2 = new WeakMap();

function updateUsers(userData) {
    userData.users.forEach((user) => {
        weakMap2.set(user, `Stuff`);
    })
}

updateUsers(userData);
console.log(weakMap2.get(userData.users[0]));
// Some Ajax/HTTP/socket happens
userData.users[0] = null;
updateUsers(userData);
//console.log(weakMap2.get(userData.users[0]));