//с использованием литерала объекта

let person1 = {
    firstName: 'John1',
    lastName: 'Doe1',
    age: 31,
    greet: function() {
        console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
    },
    logInfo: function() {
        console.log('Name:', this.firstName, this.lastName + ',', 'Age:', this.age);
    }
};

person1.greet();
person1.logInfo();

let anotherPerson1 = Object.create(person1);
anotherPerson1.firstName = 'Alice1';
anotherPerson1.lastName = 'Smith1';
anotherPerson1.age = 21;

anotherPerson1.greet();
anotherPerson1.logInfo();



//с использованием функции-конструктора

function Person2(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
        console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
    };
}

Person2.prototype.logInfo = function() {
    console.log('Name:', this.firstName, this.lastName + ',', 'Age:', this.age);
};

let person2 = new Person2('John2', 'Doe2', 32);
person2.greet();
person2.logInfo();

function AnotherPerson2(firstName, lastName, age) {
    Person2.call(this, firstName, lastName, age);

}

AnotherPerson2.prototype = Object.create(Person2.prototype);
AnotherPerson2.prototype.constructor = AnotherPerson2;

let anotherPerson2 = new AnotherPerson2('Alice2', 'Smith2', 22);
anotherPerson2.greet();
anotherPerson2.logInfo();



//с использованием класса (ES6+)

class Person3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }

    logInfo() {
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
    }
}

let person3 = new Person3('John3', 'Doe3', 33);
person3.greet();
person3.logInfo();

class AnotherPerson3 extends Person3{

}

let anotherPerson3 = new AnotherPerson3('Alice3', 'Smith3', 23);
anotherPerson3.greet();
anotherPerson3.logInfo();