let num = +prompt('please enter a number');

let i = 0;
let numCopy = num;

while(numCopy > 0) {
    i++;
    numCopy /= 10; // now num equals = 865.4
    numCopy = parseInt(numCopy) // now num equals = 865
}

document.write(`the number ${num} has ${i} digits`)