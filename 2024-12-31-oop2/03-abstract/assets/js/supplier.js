import Person from "./person.js";
export default class Supplier extends Person {
    deliveries;
    constructor(name, birthdate, deliveries) {
        super(name, birthdate);
        this.deliveries = deliveries;
    }
    calcRevenue() {
        return this.deliveries.reduce((cum, cur) => cum + cur, 0) * -1;
    }
}
