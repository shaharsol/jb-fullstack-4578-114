import Animal from "./animal.js";
export default class Dog extends Animal {
    constructor(color, breed, price, isTrained) {
        super(color, breed, price);
        this.isTrained = isTrained;
    }
    display() {
        console.log(`isTrained: ${this.isTrained}`);
    }
}
