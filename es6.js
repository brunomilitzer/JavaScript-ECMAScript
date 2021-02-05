// Replace the constructor with the "class" keyword
class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        this._weapon = weapon;
        this._cape = cape;
    }

    powerUp() {
        this._strength += 5;
    }
    get name() {
        console.log('Getting name');
    }
    set name(newName) {
        console.log("Setting name");
        this._name = newName;
    }
    static goodHero() {
        return true;
    }
}

class Human extends SuperHero {

    constructor(healthPoints, ...superHeroDetails) {
        super(...superHeroDetails);

        this._healthPoints = healthPoints;
    }
    set name (newName) {
        console.log("Setting name for human");
        this._name = newName;
    }
}

const bruceDetails = [20, 'Bruce Wayne', 10, 8, "Brains", false];
const batmanDetails = ['Batman', 10, 8, 'Gadgets', true];

let hero1 = new Human(...bruceDetails);
let hero2 = new SuperHero(...batmanDetails);

console.log(hero1);
console.log(hero2);

hero1.powerUp();
hero1.speed = 2;

console.log('----------------');

console.log(SuperHero.goodHero());