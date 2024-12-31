const dog = {
    name: 'noop',
    weight: 30,
    breed: 'Afghan Hound'
};
const cat = {
    name: 'Eden',
    weight: 8,
    numberOfSouls: 6
};
function clone(obj) {
    return { ...obj };
}
const aDuplicationOfDog = { ...dog };
const anotherDuplicationOfDog = clone(dog);
const anotherDuplicationOfCat = clone(cat);
const stamObject = clone({
    name: 'yossi',
    age: 22
});
console.log(dog);
console.log(aDuplicationOfDog);
console.log(anotherDuplicationOfDog);
console.log(cat);
const aDuplicationOfCat = clone(cat);
export {};
