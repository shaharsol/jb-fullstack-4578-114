import Person from "./person.js";

export default class Supplier extends Person {

    public constructor(
        name: string,
        birthdate: Date,
        private deliveries: number[]
    ) {
        super(name, birthdate)
    }

}