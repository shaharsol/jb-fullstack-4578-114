// const grade1 = 97;
// const grade2 = 66;
// const grade3 = 73;
// const grade4 = 88;
// const grade5 = 55;

const grades = [97, 66,  73,  88,  55,  78]
//              0   1    2    3    4    5

// the definition of [i]: i is the *offset* of the value in the array

document.write(grades)

document.write('<br>')

document.write(`${grades[0]}<br>`)

// update value of a specific item
grades[2] += 6;

document.write(`${grades[2]}<br>`)
document.write(grades)

document.write('<br>')

// add a value to the array
grades.push(100)

document.write(grades)

document.write('<br>')

// print the array length
document.write(grades.length)

document.write('<br>')

// remove an item from an array
//            the offset to begin
//               number of item to include
grades.splice(3, 1) // 1, 2, 3, 4, 5, 6 => 1, 2, 3 + 5, 6
document.write(grades)

document.write('<br>')

grades.splice(2, 2) // 1, 2, 3, 4, 5, 6 => 1, 2 + 5, 6
document.write(grades)

document.write('<br>')

    