// используем bind

const obj1 = { item: 'some value' };

function logger1() {
    console.log(`I output only external context: ${this.item}`);
}

const boundLogger = logger1.bind(obj1);
boundLogger();



//используем call

const obj2 = { item: 'some value' };

function logger2() {
    console.log(`I output only external context: ${this.item}`);
}

logger2.call(obj2);



//используем apply

const obj3 = { item: 'some value' };

function logger3() {
    console.log(`I output only external context: ${this.item}`);
}

logger3.apply(obj3);