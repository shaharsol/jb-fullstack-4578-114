export default class Car {
    // methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    constructor(make, model, diesel, year, price) {
        this.serialNumber = Math.floor(Math.random() * 10000000);
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
