function printMaxArrayItem(numbersArray) {
    let max = 0
    for(const num of numbersArray) {
        max = num > max ? num : max
    }
    console.log(`max of ${numbersArray} is ${max}`)
}

const someArray = [1, 2, 3]
printMaxArrayItem(someArray)
const someOtherArray = [1, 2, 3, 90, 70, 110, 220, 3]
printMaxArrayItem(someOtherArray)