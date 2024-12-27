function Person(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age    
}

Person.prototype.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`)
}

class PersonClass {
    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        this.age = age
    }

    sayHi() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const personObj = {
    name: 'Sergey',
    age: 24,
    gender: 'male',
    sayHi() {
        console.log(`Hey, i am ${this.name}`)
    }
}

Object.prototype.logInfo = function() {
    console.log(`Name: ${this.name}, gender: ${this.gender}, age: ${this.age}`)
}

let anotherPersonFunc = new Person('Svetlana', 'female', 20)
anotherPersonFunc.sayHi()
let anotherPersonClass = new PersonClass('Evgen', 'male', 22)
anotherPersonClass.sayHi()
let anotherPersonObj = Object.create(personObj)
anotherPersonObj.sayHi()
