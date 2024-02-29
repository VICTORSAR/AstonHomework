class SuperPerson {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

class SuperHero extends SuperPerson {
    constructor(name, superpower) {
        super(name);
        this._superpower = superpower;
    }

    get superpower() {
        return this._superpower;
    }

    set superpower(newPower) {
        this._superpower = newPower;
    }
}

let superHero = new SuperHero('Superman', 'Flight');
console.log(superHero.name);
console.log(superHero.superpower);

superHero.name = 'Batman';
superHero.superpower = 'Money';

console.log(superHero.name);
console.log(superHero.superpower);