// exercise 1 - no arguments, single command

function sayHello() {
    console.log('hello')
}

function doSomething(callback) {
    callback()
}

doSomething(sayHello)

// inline function
doSomething(function sayHello() {
    console.log('hello')
})

// anonymous function
doSomething(function () {
    console.log('hello')
})

// arrow function
doSomething(() => console.log('hello'))

// exercise 1 - several arguments, single command
function sum (a, b, c) {
    console.log(a + b + c)
}

function doSum(callback) {
    callback(10, 20, 30)
}

// inline
doSum(function sum (a, b, c) {
    console.log(a + b + c)
})
// anonymous
// arrow









