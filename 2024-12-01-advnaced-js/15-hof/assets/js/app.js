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
for(const student of students) {
    if(student.grade === 65) {
        console.log(student)
        break
    }
}

const student = students.find(student => student.grade === 65)
console.log(student)

// filter items
for(const student of students) {
    if(student.grade === 65) {
        console.log(student)
        break
    }
}
