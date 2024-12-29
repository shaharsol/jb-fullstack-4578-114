export default class Car {
    // methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    // public constructor(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    // short hand constructor
    constructor(make, model, diesel, year, price) {
        this.make = make;
        this.model = model;
        this.diesel = diesel;
        this.year = year;
        this.price = price;
        // data members / class fields
        // public make: string
        // public model: string
        // public diesel: boolean
        // public year: number
        // public price: number
        this.serialNumber = Math.floor(Math.random() * 10000000);
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
