class SuperPerson {
    #name
    constructor(name) {
        this.#name = name
    }

    set name(value) {
        this.#name = value
    }

    get name() {
        return this.#name
    }
}

let person = new SuperPerson('Vlad')

class Developer extends SuperPerson {
    constructor(name) {
        super()
        this.name = name
    }

    sayHi() {
        console.log(`Hi, i am Developer ${this.name}`)
    }
}

const developer = new Developer('Sergey')
