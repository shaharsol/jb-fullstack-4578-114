import Person from "./person.js";
export default class Supplier extends Person {
    constructor(name, birthdate, deliveries) {
        super(name, birthdate);
        this.deliveries = deliveries;
    }
}
