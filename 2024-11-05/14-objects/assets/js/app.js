// const name = 'Beery';
// const gender = 'male';
// const age = 18;
// const hairColor = 'lightblack';
// const hairStyle = 'curley'
// const weight = 50;
// const height = 168;

// const nameMira = 'Mira';
// const genderMira = 'female';
// const ageMira = 22;
// const hairColorMira = 'lightblack';
// const hairStyleMira = 'straight'
// const weightMira = 50;
// const heightMira = 170;

// Object is a collection of named data items, grouped in {}
const mira = {
    name: 'Mira',
    gender: 'female',
    age: 22,
    hairColor: 'lightblack',
    hairStyle: 'straight',
    weight: 50,
    height: 170,
    isFromPetachTikwa: true
}

// we can access object properties
// alert(mira.name)
// alert(mira.age)
// alert(`her name is ${mira.name} and her age is ${mira.age}`)

// before I add a property to an object, it is undefined
// alert(`her name is ${mira.name} and her hobby is ${mira.hobby}`)
mira.hobby = 'shopping'
// alert(`her name is ${mira.name} and her hobby is ${mira.hobby}`)
// remove the property "hobby" from the object "mira"
delete mira.hobby;
// alert(`her name is ${mira.name} and her hobby is ${mira.hobby}`)

const yoav = mira; // asign to Yoav the address in the memory of mira
// now, I have two variables, pointing to the same location
// in the computer memory
// alert(`his name is ${yoav.name} and his age is ${yoav.age}`)
yoav.name = 'Yoav'
// alert(`his name is ${yoav.name} and his age is ${yoav.age}`)
// alert(`her name is ${mira.name} and her age is ${mira.age}`)


// alert(mira) // [object Object]

// alert(mira.name)
// alert(mira['name'])

// for-in loop, a special loop to iterate objects
for(const property in mira) {
    document.write(`mira ${property} is: ${mira[property]}<br>`)
}

const emp = {
    name: 'beeri',
    salary: 1000000
}

// works, even if emp is const
emp.salary += 1000;
alert(emp.salary)

// won't work, can't re-assign to const
emp = {
    name: 'mira'
}




