const randomNumber = Math.random()
const randomNumber100 = randomNumber * 100;
const randomNumberParsed = parseInt(randomNumber100)
const randomNumberHigher = randomNumberParsed + 300

document.write(`${randomNumber}<br>`)
document.write(`${randomNumber100}<br>`)
document.write(`${randomNumberParsed}<br>`)
document.write(`${randomNumberHigher}<br>`)


// can also use:
// Math.floor to round down
// Math.ceil to round up