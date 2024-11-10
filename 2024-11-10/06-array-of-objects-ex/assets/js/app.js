const students = [
    {
        firstName: 'Osher',
        lastName: 'Santana',
        grades: [70, 80, 90]
    },
    {
        firstName: 'Ilan',
        lastName: 'Atal',
        grades: [72, 78, 96]
    },
    {
        firstName: 'Chai',
        lastName: 'Heyman',
        grades: [84, 62, 98]
    },
    // {
    //     name: {
    //         first: 'Yoav',
    //         middle: ''
    //         last: 'Guterman'
    //     },
    //     grades: [66, 88, 99]
    // }
]

console.log(students)

for(const student of students) {

    let sum = 0;
    for(const grade of student.grades) {
        sum += grade
    }

    // const grades = student.grades // now grades contains an array
    // const length = grades.length // every array has a property called "length"

    console.log(`name of student is ${student.firstName} and their average is ${sum / student.grades.length}`)

}