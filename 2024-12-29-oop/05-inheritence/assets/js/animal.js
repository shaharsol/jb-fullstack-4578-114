import BreathingCreature from "./breathing-creature.js";
class Animal extends BreathingCreature {
    constructor(color, breed, price) {
        super();
        this.color = color;
        this.breed = breed;
        this.price = price;
        Animal.numberOfAnimals++;
    }
    static getNumberOfAnimals() {
        return Animal.numberOfAnimals;
    }
    display() {
        console.log(`color: ${this.color}`);
        console.log(`breed: ${this.breed}`);
        console.log(`price: ${this.price}`);
    }
    getColor() {
        return this.color;
    }
    getBreed() {
        return this.breed;
    }
    getPrice() {
        return this.price;
    }
}
Animal.numberOfAnimals = 0;
export default Animal;
