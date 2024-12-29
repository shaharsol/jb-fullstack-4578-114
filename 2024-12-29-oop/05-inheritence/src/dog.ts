import Animal from "./animal.js"

export default class Dog extends Animal{

    public constructor (
        color: string,
        breed: string,
        price: number,
        private isTrained: boolean
    ) {
        super(color, breed, price)
    }

    public display() {
        console.log(`isTrained: ${this.isTrained}`)
    }


}