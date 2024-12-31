import CoffeeMakerInterface from "./coffee-maker-interface.js";
import Voltage from "./voltage.js";

const coffeMaker: CoffeeMakerInterface = {
    numberOfMilkHotters: 2,
    numberOfPins: 4,
    voltage: Voltage.V240,
    make: 'lavaza',
}

console.log(coffeMaker)