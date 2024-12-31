import Person from "./person.js";

export default class Supplier extends Person {
    

    public constructor(
        name: string,
        birthdate: Date,
        private deliveries: number[]
    ) {
        super(name, birthdate)
    }

    public calcRevenue(): number {
        return this.deliveries.reduce((cum, cur) => cum + cur, 0) * -1
    }

}