const students = [
    {
        name: 'Yoav',
        grade: 95,
        age: 22
    },
    {
        name: 'Beery',
        grade: 96,
        age: 18
    },
    {
        name: 'Itay',
        grade: 65,
        age: 25
    }
]

// find item

// loop version
for(const student of students) {
    if(student.grade === 65) {
        console.log(student)
        break
    }
}

// HOF version
const student = students.find(student => student.grade === 65)
console.log(student)

// filter items

// loop version
const studentsWith90Plus = []
for(const student of students) {
    if(student.grade > 90 && student.name.startsWith('B')) {
        studentsWith90Plus.push(student)
    }
}
console.log(studentsWith90Plus)

// HOF version
const filteredStudents = students.filter(student => student.grade > 90 && student.name.startsWith('B'))
console.log(filteredStudents)

// find index

// loop version
for(let i=0; i < students.length; i++) {
    if(students[i].age === 25) {
        console.log(i)
        break
    }
}

// HOF version
const index = students.findIndex(student => student.age === 25)
console.log(index)

// some logic per item

// loop version
for(const student of students) {
    console.log(student)
}

// HOF
students.forEach(console.log) // apparently, forEach invokes the callback with 3 params: current, currentIndex, originalArray
students.forEach((student, index, original) => console.log(original[index]))
students.forEach(student => console.log(student))

// convert array

// loop version
const newArray = []
for(const student of students) {
    newArray.push(`
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        </tr>
    `)
}
document.getElementById('students').innerHTML = newArray.join('')

// HOF version
const anotherNewArray = students.map(student => `
    <tr>
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>${student.age}</td>
    </tr>
`)
console.log(anotherNewArray)
document.getElementById('students2').innerHTML = anotherNewArray.join('')

// how to give each student 3 bonus points
// if i want to return an object from an array func, I need to wrap the {} with ()
const studentsAfterBonus = students.map(student => ({
        name: student.name,
        age: student.age,
        grade: student.grade + 3
}))
console.log(studentsAfterBonus)

// extract a single value out of an array

// the loop way
let sum = 0;
let avg = 0;
for(const student of students) {
    sum += student.grade
}
avg = sum / students.length
console.log(avg)

// the HOF way
const sum2 = students.reduce((cumulativeValue, student) => cumulativeValue + student.grade, 0)
const avg2 = sum2 / students.length

console.log(avg2)

// find max item using reduce
const max = students.reduce((currentMax, student) => currentMax > student.grade ? currentMax : student.grade, 0)
console.log(max)



