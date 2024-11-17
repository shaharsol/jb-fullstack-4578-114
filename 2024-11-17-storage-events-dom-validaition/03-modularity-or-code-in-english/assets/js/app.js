// functions
function displayInputPower(input, power) {
    console.log(input ** power)
}

function inputIsDivider(input, divider) {
    return input % divider === 0
}

function getInputFromUser() {
    return +prompt('enter a number')
}

function userStillWantsToContinue(input) {
    return input !== 0
}

// main

let input = getInputFromUser()

while(userStillWantsToContinue(input)) {
    if(inputIsDivider(input, 2)) {
        displayInputPower(input, 2)
    }
    if(inputIsDivider(input, 3)){
        displayInputPower(input ,3)
    }
    input = getInputFromUser()
}

// 1. Layout the code in English
// 2. data flow
// 3. DRY

