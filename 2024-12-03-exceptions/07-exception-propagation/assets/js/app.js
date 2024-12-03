const fixNum = (num, numberOfDigits) => num.toFixed(numberOfDigits)

const work = () => {
    const numberOfDigits = +prompt('enter number of digits')

    console.log('hello1')
    const pi = fixNum(Math.PI, numberOfDigits)
    console.log('hello2')
    console.log(pi)
}

try {
    work()
} catch(e) { // the exception occured in fixNum, then was thrown to work, and then was thrown to the main
    console.log(e.message)
}





