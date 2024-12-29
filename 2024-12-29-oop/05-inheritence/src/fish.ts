import Animal from "./animal.js";

export default class Fish extends Animal {
    public constructor (
        color: string,
        breed: string,
        price: number,
        private isFreshWater: boolean
    ) {
        super(color, breed, price)
    }

    public display() {
        super.display()
        console.log(`is fresh water? ${this.isFreshWater}`)
    }
}