function printPower2(num, powerFunc) {
    if(typeof powerFunc !== 'function') return
    console.log(powerFunc(num))
}

// with inline functions, most of the times we won't need the name of the function
// so we can omit it
printPower2(3, function (num) { return num ** 2 }) // anonymous function
printPower2(3, (num) => { return num ** 2 }) // arrow function =>

// arrow functions styles
// the goal is - as less code as possible

// function sumExample(a, b) {
//     const result = a + b
//     console.log(result)
//     return result
// }
// sumExample = 1; // valid

// many arguments, many lines of code
// parentheses around the argument list,
// curly braces around the lines of code 
const sum = (a, b) => { 
    const result = a + b
    console.log(result)
    return result
}
// sum = 4; // Invalid! JavaScript will throw an error

// one argument, many lines of code
// NO parentheses around the argument list,
// curly braces around the lines of code 
const power4 = num => {
    const result = num ** 4
    console.log(result)
    return result
}

console.log(power4(5))

// many argument, one line of code
// parentheses around the argument list,
// NO curly braces around one line of code
const powerX = (num, x) => console.log(num ** x)

// one argument, one line of code
// NO parentheses around the argument list,
// NO curly braces around one line of code
const printPower22 = num => console.log(num ** 2)

// many argument, two line of code of which one is return
// parentheses around the argument list,
// NO curly braces around one line of code
// the single line of code is the return value
const getPower2 = num => num ** 2

console.log(getPower2(5))





