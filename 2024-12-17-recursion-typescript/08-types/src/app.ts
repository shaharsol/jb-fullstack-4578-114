// primitives
const age: number = 22

const message: string = 'hello'

const isActive: boolean = true

// arrays
const ages: number[] = [1, 2, 3]

const messages: string[] = ['1', '2', '3']

const someFlags: boolean[] = [true, false, false]

// objects
const myObj: object = {}
myObj['age'] = 22

const myOtherObject: {} = {}

const yuval: {age: number, name: string, birthdate: Date} = { age: 22, name:'yuval', birthdate: new Date()}

type Person = {age: number, name: string, birthdate: Date}
const shay: Person = { age: 22, name: 'shai', birthdate: new Date()}
shay['grades'] = [90, 95, 85]
console.log(shay['grades'])

// specials
let something: any; // practically no TS on this variable
something = 'message'
something = 6
console.log(typeof something) // will print 'string' but this is the JS type, not the TS type

let myUndefined: undefined;
let myNull: null;
let myWhatever: unknown; // a little better than any

// arrays of objects
const students: Person[] = [shay, yuval]

const animals: {type: string, eat: Function}[] = [
    {
        type: 'lizard',
        eat: function () {}
    }
]








