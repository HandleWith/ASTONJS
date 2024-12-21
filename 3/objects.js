//Cоздание объектов

var counter = {}

var counter = Object.assign(counter)

const proto = {
    name: 'Bob',
    age: '25',
    gender: 'male',
    bio() {
        console.log(`name: ${this.name}, age: ${this.age}, gender: ${this.gender}`)
    }
}

var counter = Object.create(proto)

var counter = new Object()

const names = ['Иван', 'Алексей', 'Сергей', {date: '12.05.2024', location: 'Minsk'}]

var counter = {...names}

var counter = names.reduce((acc, value, index) => {
    return {...acc, [index]: value}
}, {})

//Копирование объектов

var counterCopy = Object.assign({}, counter)

var counterCopy = {...counter}

var counterCopy = structuredClone(counter)

var counterCopy = JSON.parse(JSON.stringify(counterCopy))




