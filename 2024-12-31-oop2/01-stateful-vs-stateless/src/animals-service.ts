import Animal from "./animal.js";

export default class AnimalService {
    static instance = new AnimalService()
    static getInstance() {
        return this.instance
    }
    // this is a stateless class
    // it doesn't hold ANY data
    private constructor () {}

    getAnimalsFromDatabase(): Animal[] {
        // ... fetches animals from database
        return [new Animal(2), new Animal(4), new Animal(6)]
    }
}