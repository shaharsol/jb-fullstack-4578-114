export default class Car {

    // data members / class fields
    // public make: string
    // public model: string
    // public diesel: boolean
    // public year: number
    // public price: number
    private serialNumber: number = Math.floor(Math.random() * 10000000)
    private static vat: number = 0.17
    private hornVolume = Math.random() * 10

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

    public constructor(
        private make: string, 
        private model: string, 
        private diesel: boolean, 
        private year: number, 
        private price: number
    ) {
    }
    
    public drive() {
        console.log(`I am driving my ${this.make} ${this.model}... `)
    }

    public displaySerialNumber() {
        console.log(`serial number is: ${this.serialNumber}`)
    }

    public modifySerialNumber(newSerialNumber: number) {
        this.serialNumber = newSerialNumber
    }

    public displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.getFullPrice()}`)
    }

    public getFullPrice() {
        return this.price * (1 + Car.vat)
    }

    public static horn() {
        console.log(`tututututututu`)
    }
    
    public hornSpecific() {
        console.log(`tututututututu volume: ${this.hornVolume}`)
    }

}

