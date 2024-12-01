const lastName = 'shahar'

function showGrade(grade) { // function is like a let variable
    // JS: let grade = 96
    console.log(`grade is ${grade}`)
    return true
}
const someFunction = showGrade

console.log(showGrade)
console.log(typeof showGrade)

showGrade = 60

console.log(showGrade)
console.log(typeof showGrade)

showGrade // when you need the reference to the function
showGrade() // when you need to invoke the function, when you need the function to actually process
