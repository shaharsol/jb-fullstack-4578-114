// functions
function getInputFromUser() {
    return +prompt('enter number')
}

function userStillWantsToContinue(input) {
    return input !== 0
}

function currentNumberDivide7(num) { // 7, 14, 21
    return num % 7 === 0
}

function currentNumberContains7(num) { // 17, 27, 71
    return num.toString().includes('7')
}

function boom() {
    console.log('boom')
}

function notBoom(num) {
    console.log(num)
}

// main

let input = getInputFromUser()

while(userStillWantsToContinue(input)) {
    for(let i = 1; i <= input; i++) {
        if(currentNumberDivide7(i) || currentNumberContains7(i)) {
            boom()
        } else {
            notBoom(i)
        }
    }
    input = getInputFromUser()
}
