const doCalc = (type) => {
    switch(type) {
        case '+':
            // return function add (a, b) { return a + b }
            return (a, b) => a + b
        case '*':
            // return function multiply (a, b) { return a * b }
            return (a, b) => a * b
    }
}

const calcFunction = doCalc('+')
console.log(typeof calcFunction)
console.log(calcFunction)

console.log(typeof calcFunction(2, 4))
console.log(calcFunction(2, 4))
