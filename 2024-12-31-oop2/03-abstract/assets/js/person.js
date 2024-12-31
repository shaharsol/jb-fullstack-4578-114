export default class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }
    printName() {
        console.log(this.name);
    }
}
