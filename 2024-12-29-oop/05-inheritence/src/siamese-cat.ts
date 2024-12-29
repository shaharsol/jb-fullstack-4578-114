import Cat from "./cat.js";

export default class SiameseCat extends Cat {

    public constructor (
        color: string,
        price: number,
        numberOfSoulsLeft: number
    ) {
        super(color, 'Siamese Cat', price, numberOfSoulsLeft)
    }

}