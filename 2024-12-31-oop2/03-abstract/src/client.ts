import Person from "./person.js";

export default class Client extends Person {

    public constructor(
        name: string,
        birthdate: Date,
        private orders: number[]
    ) {
        super(name, birthdate)
    }

}