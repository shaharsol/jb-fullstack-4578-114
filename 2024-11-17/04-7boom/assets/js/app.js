// functions
// main

let input = getInputFromUser()

while(userStillWantsToContinue(input)) {
    for(let i = 0; i < input; i++) {
        if(currentNumberDivide7(i) || currentNumberContains7(i)) {
            boom(i)
        } else {
            notBoom(i)
        }
    }
    input = getInputFromUser()
}

// 1. Layout the code in English
// 2. data flow
// 3. DRY

