import Animal from "./animal.js"

export default class Cat extends Animal{

    public constructor (
        color: string,
        breed: string,
        price: number,
        private numberOfSoulsLeft: number
    ) {
        super(color, breed, price)
    }

    public display() {
        console.log(`numberOfSoulsLeft: ${this.numberOfSoulsLeft}`)
    }

}