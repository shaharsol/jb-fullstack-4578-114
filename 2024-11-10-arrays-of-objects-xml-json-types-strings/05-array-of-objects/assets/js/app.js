const mira = {
    name: 'Mira',
    age: 22,
    gender: 'female',
    city: 'Petch Tiqwa'
}

const yoav = {
    name: 'Yoav',
    age: 22,
    gender: 'male',
    city: 'Herzliya'
}

const beery = {
    name: 'Beery',
    age: 18,
    gender: 'male',
    city: 'Holon'
}

const osher = {
    name: 'Osher',
    age: 22,
    gender: 'male',
    city: 'Givat Shmuel'
}

const grades = [100, 96, 55]
const animals = ['dog', 'cat', 'fish']
const friends = [mira, yoav ,beery, osher]

for(const friend of friends) {
    console.log(`properties of ${friend.name}:`)
    for(const property in friend) {
        console.log(`${property} value is ${friend[property]}`)
    }
}

console.log(`I have ${friends.length} friends`)

friends.splice(1,1)

console.log(`I have ${friends.length} friends`)


const musicBands = [
    {
        name: 'Nirvana',
        style: 'Rock'
    }, 
    {
        name: 'Beatles', 
        style: 'Rock'
    }, 
    {
        name: 'Mashina', 
        style: 'Israeli'
    }
]

console.log(`there are ${musicBands.length} bands in my collection`)








