const num = 123
console.log(`typeof num is ${typeof num}`)

const firstName = 'Beery'
console.log(`typeof firstName is ${typeof firstName}`)

const iAmHappy = true
console.log(`typeof iAmHappy is ${typeof iAmHappy}`)

const iAmSad = 4 < 2
console.log(`typeof iAmSad is ${typeof iAmSad}`)

const calc = 4 + 22
console.log(`typeof calc is ${typeof calc}`)

let dayOfWeek;
console.log(`typeof dayOfWeek is ${typeof dayOfWeek}`)

const itay = {name: 'itay', type: 'person', age: 25, average: 90.20}
console.log(`typeof itay is ${typeof itay}`)

console.log(`typeof itay.type is ${typeof itay.type}`)

console.log(`typeof itay.birthdate is ${typeof itay.birthdate}`)

console.log(`typeof itay.avergae is ${typeof itay.average}`)

// alert('hello')
console.log(`typeof alert is ${typeof alert}`)

const animals = ['dog', 'cat', 'fish']
console.log(`typeof animals is ${typeof animals}`)

console.log(`itay age is represented as ${typeof itay.age === 'number' ? 'number' : 'string'}`)

if (typeof itay.age !== 'number') itay.age = +itay.age

const osherJSON = `{"name":"osher","age":22}`
const osher = JSON.parse(osherJSON)
for(const property in osher){
    console.log(`osher has a property name ${property} of type ${typeof osher[property]}`)
}



