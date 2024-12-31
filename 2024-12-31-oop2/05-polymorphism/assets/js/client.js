import Person from "./person.js";
export default class Client extends Person {
    orders;
    constructor(name, birthdate, orders) {
        super(name, birthdate);
        this.orders = orders;
    }
    calcRevenue() {
        return this.orders.reduce((cum, cur) => cum + cur, 0);
    }
}
