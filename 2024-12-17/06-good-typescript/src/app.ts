// bad1
let x: number = 1
let y = 2

// x = '1'
let z: string = 'hello '
let t: string = 'world'
let result: string = z + t
console.log(result)

console.log('bla')
console.log(x + y)


// bad2
function sum(a: number, b: number) {
    return a + b
}

// sum = 'x'
// console.log(sum('2', 3))

console.log(sum(2, 3))


// bad3
function multiply(a: number, b: number): number {
    const result = a * b
    return result
}

console.log(multiply(2, 3))
