import Person from "./person.js";
export default class Employee extends Person {
    constructor(name, birthdate, salaries) {
        super(name, birthdate);
        this.salaries = salaries;
    }
}
