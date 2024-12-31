import Animal from "./animal.js";

class AnimalService {
    getAnimalsFromDatabase(): Animal[] {
        // ... fetches animals from database
        return [new Animal(2), new Animal(4), new Animal(6)]
    }
}

const animalService = new AnimalService()
export default animalService