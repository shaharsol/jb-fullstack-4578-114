function printMax(a, b) {
    console.log(a > b ? a : b)
}

function randomNumber() {
    const number = parseInt(Math.random() * 100)
}

printMax(4, 9)
printMax(parseInt(Math.random() * 100), parseInt(Math.random() * 100)) // remember this line



const num1 = +prompt('enter a number')
const num2 = +prompt('enter a number')

printMax(num1, num2)