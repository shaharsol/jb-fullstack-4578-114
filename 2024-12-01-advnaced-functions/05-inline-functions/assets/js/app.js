function printPower2(num, powerFunc) {
    if(typeof powerFunc !== 'function') return
    console.log(powerFunc(num))
}


// if i want to use a callback that is unique, which i don't need 
// anywhere else in the code 
// i can declare it inside the function call, and this is called inline function
printPower2(3, function power2(num) { return num ** 2 }) // inline function

