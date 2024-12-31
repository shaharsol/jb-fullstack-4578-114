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
        // super.display()
        // console.log(`numberOfSoulsLeft: ${this.numberOfSoulsLeft}`)
        console.log(`color: ${this.color}`)
    }

}