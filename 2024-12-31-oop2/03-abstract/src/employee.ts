import Person from "./person.js";

export default class Employee extends Person {

    public constructor(
        name: string,
        birthdate: Date,
        private salaries: number[]
    ) {
        super(name, birthdate)
    }

    public calcRevenue(): number {
        return this.salaries.reduce((cum, cur) => cum + cur, 0) * -1
    }

}