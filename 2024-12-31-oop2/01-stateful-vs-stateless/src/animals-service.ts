import Animal from "./animal.js";

export default class AnimalService {

    // this is a stateless class
    // it doesn't hold ANY data

    getAnimalsFromDatabase(): Animal[] {
        // ... fetches animals from database
        return [new Animal(2), new Animal(4), new Animal(6)]
    }
}