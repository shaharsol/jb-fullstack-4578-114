// primitives
const age = 22;
const message = 'hello';
const isActive = true;
// arrays
const ages = [1, 2, 3];
const messages = ['1', '2', '3'];
const someFlags = [true, false, false];
// objects
const myObj = {};
myObj['age'] = 22;
const myOtherObject = {};
const yuval = { age: 22, name: 'yuval', birthdate: new Date() };
const shay = { age: 22, name: 'shai', birthdate: new Date() };
shay['grades'] = [90, 95, 85];
console.log(shay['grades']);
// specials
let something; // practically no TS on this variable
something = 'message';
console.log(typeof something); // will print 'string' but this is the JS type, not the TS type
let myUndefined;
let myNull;
let myWhatever; // a little better than any
// arrays of objects
const students = [shay, yuval];
const animals = [
    {
        type: 'lizard',
        eat: function () { }
    }
];
