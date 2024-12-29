export default class Car {
    constructor() {
        this.serialNumber = Math.floor(Math.random() * 10000000);
    }
    // methods
    init(make, model, diesel, year, price) {
        this.make = make;
        this.model = model;
        this.diesel = diesel;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}... `);
    }
    displaySerialNumber() {
        console.log(`serial number is: ${this.serialNumber}`);
    }
    modifySerialNumber(newSerialNumber) {
        this.serialNumber = newSerialNumber;
    }
    displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.price}`);
    }
}
