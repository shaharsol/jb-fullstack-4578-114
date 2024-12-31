import Person from "./person.js";

export default class Client extends Person {

    public constructor(
        name: string,
        birthdate: Date,
        private orders: number[]
    ) {
        super(name, birthdate)
    }

    public calcRevenue(): number {
        return this.orders.reduce((cum, cur) => cum + cur, 0)        
    }

}