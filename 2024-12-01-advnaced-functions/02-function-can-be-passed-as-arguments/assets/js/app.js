const lastName = 'shahar'

function showGrade(grade) {
    // JS: let grade = 96
    console.log(`grade is ${grade}`)
    return true
}


function showName(name) {
    console.log(`name is ${name}`)
}

function showFunction(someFunction) {
    console.log(`someFunction is ${someFunction}`)
    console.log(`someFunction type is ${typeof someFunction}`)
    someFunction(60)
}

showName(lastName)
const highestGrade = 96
showGrade(highestGrade) // showGrade(96)
showGrade(93)

showFunction(showGrade)