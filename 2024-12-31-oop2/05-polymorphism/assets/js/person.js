export default class Person {
    name;
    birthdate;
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }
    printName() {
        console.log(this.name);
    }
}
