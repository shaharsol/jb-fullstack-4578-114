let sum = 0;
let count = 0;
let num;

const someVar = +prompt('please enter not a number:')
if(isNaN(someVar)) {
    alert('this is not a number')
}

while (num !== 0) {
    num = +prompt('please enter a number'); 
    sum += num;
    count++;
}

if(count > 0) {
    alert(`average is ${sum/(count-1)}`)
} else {
    alert('no data to process')
}

