import Person from "./person.js";
export default class Client extends Person {
    constructor(name, birthdate, orders) {
        super(name, birthdate);
        this.orders = orders;
    }
}
