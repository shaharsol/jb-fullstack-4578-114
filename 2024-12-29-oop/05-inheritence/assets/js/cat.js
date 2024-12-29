import Animal from "./animal.js";
export default class Cat extends Animal {
    constructor(color, breed, price, numberOfSoulsLeft) {
        super(color, breed, price);
        this.numberOfSoulsLeft = numberOfSoulsLeft;
    }
    display() {
        console.log(`numberOfSoulsLeft: ${this.numberOfSoulsLeft}`);
    }
}
