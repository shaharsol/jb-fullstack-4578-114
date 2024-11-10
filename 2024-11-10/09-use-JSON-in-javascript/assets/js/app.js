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
    }
]

// turns object into a JSON string
const jsonString = JSON.stringify(students)
document.write(jsonString)
document.write('<hr>')

console.log(students)
console.log(jsonString)

const friendsFromInstagram = `[{"firstName":"Adir","lastName":"Santana","grades":[70,80,90]},{"firstName":"Ido","lastName":"Atal","grades":[72,78,96]},{"firstName":"Chai","lastName":"Heyman","grades":[84,62,98]}]`;

// turns a json string into an object
const friends = JSON.parse(friendsFromInstagram)
console.log(friends)
console.log(`i have ${friends.length} friends`)
