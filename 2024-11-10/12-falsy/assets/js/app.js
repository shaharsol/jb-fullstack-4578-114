const isOld = false
if (isOld) {
    console.log(`is old is NOT falsy`)
} else {
    console.log(`is old is falsy`)
}

const number = 1
if (number) {
    console.log(`number=1 is NOT falsy`)
} else {
    console.log(`number=1 is falsy`)
}

const number2 = 100
if (number) {
    console.log(`number=100 is NOT falsy`)
} else {
    console.log(`number=100 is falsy`)
}

const number3 = 0
if (number3) {
    console.log(`number=0 is NOT falsy`)
} else {
    console.log(`number=0 is falsy`)
}

const name = 'shahar'
if (name) {
    console.log(`name=shahar is NOT falsy`)
} else {
    console.log(`name=shahar is falsy`)
}

const name2 = ''
if (name2) {
    console.log(`name='' is NOT falsy`)
} else {
    console.log(`name='' is falsy`)
}

const blank = ' '
if (blank) {
    console.log(`blank=' ' is NOT falsy`)
} else {
    console.log(`blank=' ' is falsy`)
}

let age;
if (age) {
    console.log(`undefined is NOT falsy`)
} else {
    console.log(`undefined is falsy`)
}

let address = null;
if (address) {
    console.log(`null is NOT falsy`)
} else {
    console.log(`null is falsy`)
}

let student = {name: 'daniel', salary: null};
if (student.salary) {
    console.log(`null is NOT falsy`)
} else {
    console.log(`null is falsy`)
}

let salary = parseInt("hfkjgfgffd4454hkjgh")
console.log(`salary is ${salary}`)
if (salary) {
    console.log(`NaN is NOT falsy`)
} else {
    console.log(`NaN is falsy`)
}

