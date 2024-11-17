// function isPositive(num) {
//     return num > 0 ? true : false
// }

// function isPositive(num) {
//     return num > 0
// }

function isPositive(num) {
    if (num > 0) {
        return true;
    }
    return false;
}

const num = 3;
console.log(`${num} is ${isPositive(num)}`)