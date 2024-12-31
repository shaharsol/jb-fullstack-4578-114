import AnimalService from "./animals-service.js";

const animalService = new AnimalService()
const animals = animalService.getAnimalsFromDatabase()
const animalService2 = new AnimalService()

animalService2.getAnimalsFromDatabase()
