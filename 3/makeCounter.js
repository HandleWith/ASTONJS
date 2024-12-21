var makeCounter1 = () => {
    let count = 0;
    return function () {
        return count++;
    };
}

const counter1 = makeCounter1()

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

function makeCounter2() {
    counter.num = 0
    function counter() {
        return counter.num++
    }
    return counter
}

const counter2 = makeCounter2()

// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


class MakeCounter {
    constructor() {
        this.count = 0
    }
    increase() {
        this.count++
        return this.count
    }
}

const counter3 = new MakeCounter()
// console.log(counter3.increase())
// console.log(counter3.increase())
// console.log(counter3.increase())



