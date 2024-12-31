import Animal from "./animal.js";

export default interface Cat extends Animal{
    name: string,
    weight: number,
    numberOfSouls: number
}