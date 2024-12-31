import Cat from "./cat.js";
export default class SiameseCat extends Cat {
    constructor(color, price, numberOfSoulsLeft) {
        super(color, 'Siamese Cat', price, numberOfSoulsLeft);
    }
}
