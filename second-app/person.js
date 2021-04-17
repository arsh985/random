// const person = {
//     name : 'Arsh',
//     age : 23
// }

// module.exports = person;

class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age} years Old`);
    }
}

module.exports = Person;