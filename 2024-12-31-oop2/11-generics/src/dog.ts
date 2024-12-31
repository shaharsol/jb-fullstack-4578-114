import Animal from "./animal.js";

export default interface Dog extends Animal {
    weight: number,
    name: string,
    breed: string
}