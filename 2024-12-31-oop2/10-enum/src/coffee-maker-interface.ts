import Maker from "./makers";
import Voltage from "./voltage";

export default interface CoffeeMakerInterface {
    numberOfPins: number,
    numberOfMilkHotters: number,
    make: Maker,
    voltage: Voltage
}