Function.prototype.customBind = function(context, ...args) {
    const bindFunction = this

    return function(...bindArgs) {
        context = context ? context : globalThis

        const key = 'tmp'
        context[key] = bindFunction

        const result = context[key](...args, ...bindArgs)
        delete context[key]
        return result
    }
}

function greet(greeted, punctuation) {
    return `${greeted}${punctuation} ${this.name}`
}
const obj = { name: 'Ksenia' }
const greeting = greet.customBind(obj, 'Hello')

console.log(greeting(','))
