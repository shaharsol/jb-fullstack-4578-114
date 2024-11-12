const min = -100
const max = 100

const randomNumbers = [] // create an EMPTY array

for(let i=1; i<=100; i++) {
    const randomNumber = parseInt(Math.random() * (max - min)) + min
    randomNumbers.push(randomNumber)
}

// alert(randomNumbers)

const guess = +prompt('guess a number in the array')

// let isBingo = false;
// let count = 0;
// for(const randomNumber of randomNumbers) {
//     if(randomNumber === guess) {
//         // isBingo = true;
//         count++
//     }
// }
// alert(count > 0 ? `found ${guess} ${count} times` : 'No Bingo')

const indexes = []
for(let i=0; i < randomNumbers.length; i++) {
    if(randomNumbers[i] === guess) {
        indexes.push(i)
    }
}

alert(indexes)


// const friends = []
// const filledArray = [3, 4, 5]
// const animals = ['dog', 'cat', 'fish']

// console.log(`I have ${animals.length} animals`)
// console.log(`I have ${friends.length} friends`)
// friends.push('Adi')
// friends.push('Tamir')
// friends.push('Mira')
// friends.push('Ido')
// console.log(`I have ${friends.length} friends`)
// console.log(friends)

// friends.splice(1, 1)
// console.log(friends)

// for(let i=0; i < friends.length; i++) {
//     console.log(friends[i])
// }

// for(const friend of friends) {
//     console.log(friend)    
// }



