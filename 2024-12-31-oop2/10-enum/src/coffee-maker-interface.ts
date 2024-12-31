import Voltage from "./voltage";

export default interface CoffeeMakerInterface {
    numberOfPins: number,
    numberOfMilkHotters: number,
    make: string,
    voltage: Voltage
}