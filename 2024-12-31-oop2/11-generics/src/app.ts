import Animal from "./animal.js";
import Cat from "./cat.js";
import Dog from "./dog.js";

const dog: Dog = {
    type: 'mixed',
    name: 'noop',
    weight: 30,
    breed: 'Afghan Hound'
}

const cat: Cat = {
    type: 'siamese',
    name: 'Eden',
    weight: 8,
    numberOfSouls: 6
}

function clone<T extends Animal>(obj: T): T {
    return {...obj}
}

const aDuplicationOfDog = {...dog}
const anotherDuplicationOfDog = clone(dog)
const anotherDuplicationOfCat = clone(cat)
const stamObject = clone({
    name: 'yossi',
    age: 22
})

console.log(dog)
console.log(aDuplicationOfDog)
console.log(anotherDuplicationOfDog)

console.log(cat)


const aDuplicationOfCat = clone(cat)
