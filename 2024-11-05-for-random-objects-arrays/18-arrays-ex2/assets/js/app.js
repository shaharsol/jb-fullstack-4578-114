const grades = []

for(let i=1; i<=12; i++) {
    grades.push(parseInt(Math.random() * 101))
}

document.write(`${grades}<br>`)
document.write(`${grades[0]}<br>`)
document.write(`${grades[4]}<br>`)

for(const grade of grades) {
    document.write(`${grade}<br>`)
}

grades[1] -= 5;
document.write(`${grades}<br>`)

let sum = 0;
for(const grade of grades) {
    sum += grade;
}
document.write(`the average grade is ${sum/grades.length}<br>`)
// if I want to display only 2 digits after the decimal point:
// document.write(`the average grade is ${(sum/grades.length).toFixed(2)}`)

let max = 0;
for(const grade of grades) {
    max = (grade > max ? grade : max);
}
document.write(`the max grade is ${max}`)

