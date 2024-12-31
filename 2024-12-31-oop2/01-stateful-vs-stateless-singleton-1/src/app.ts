import AnimalService from "./animals-service.js";

// const animalService = new AnimalService()
const animalService = AnimalService.getInstance()
const animals = animalService.getAnimalsFromDatabase()
// const animalService2 = new AnimalService()
const animalService2 = AnimalService.getInstance()

animalService2.getAnimalsFromDatabase()
