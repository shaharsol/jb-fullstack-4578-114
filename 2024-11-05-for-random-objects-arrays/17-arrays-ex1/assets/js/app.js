const grades = [77, 66, 52, 45, 100, 60];

// Not elegant and not flexible for changes in the array:
// document.write(`${grades[0]}<br>`)
// document.write(`${grades[1]}<br>`)
// document.write(`${grades[2]}<br>`)
// document.write(`${grades[3]}<br>`)
// document.write(`${grades[4]}<br>`)
// document.write(`${grades[5]}<br>`)

// for(let i = 0; i <= grades.length - 1; i++ ) {
//     document.write(`${grades[i]}<br>`)
// }

// for-of
// for (const item of grades) {
//     document.write(`${item}<br>`)
// }

// disadvantage of for-of loop
// for(let i = 0; i <= grades.length - 1; i++ ) {
//     document.write(`${grades[i]}<br>`)
//     grades[i] += 6;
// }
// document.write(grades)
// document.write('<br>')

// [0, 1, 2]
// for-of
for (let grade of grades) {
    document.write(`${grade}<br>`)
    grade += 6
}
document.write(grades)
document.write('<br>')

const someArray = []




