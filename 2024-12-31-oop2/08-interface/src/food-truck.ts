import CoffeeMaker from "./coffee.js";
import HotdogsMaker from "./hotdogs.js";
import Shcnitzel from "./schnitzel.js";

export default class FoodTruck implements HotdogsMaker, CoffeeMaker, Shcnitzel{
    pan: object;
    hotdogsMachine: object
    espressoMachine: object;

    fry(addons: object[]): object {
        console.log('frying schintzel')
        return {}
    }

    makeLatte(): object {
        console.log('making latter')
        return {}
    }

    makeAmericano(): object {
        console.log('making americano')
        return {}
    }

    makeHotdogs(): object {
        return {}
    }
}