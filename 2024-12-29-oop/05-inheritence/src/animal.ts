import BreathingCreature from "./breathing-creature.js"

export default class Animal extends BreathingCreature{

    public constructor (
        public readonly color: string,
        public readonly breed: string,
        public price: number,
    ) {
        super()
    }

    public display() {
        console.log(`color: ${this.color}`)
        console.log(`breed: ${this.breed}`)
        console.log(`price: ${this.price}`)
    }

    public getColor() {
        return this.color
    }

    public getBreed() {
        return this.breed
    }
    public getPrice() {
        return this.price
    }


}