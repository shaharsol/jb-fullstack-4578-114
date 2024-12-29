export default class Mobile {

    // data members / class fields
    private type: string
    private screenSize: number
    private price: number
    private numberOfCameras: number
    private pinCode: number = Math.floor(Math.random() * (9999 - 1000)) + 1000

    // methods
    public constructor(type: string, screenSize: number, price: number, numberOfCameras: number) {
        this.type = type
        this.screenSize = screenSize
        this.price = price
        this.numberOfCameras = numberOfCameras
    }
    
    public displaySaleInfo() {
        console.log(`A ${this.type} with screen ${this.screenSize}" for sale for ${this.price}`)
    }

    public getPinCode() {
        return this.pinCode
    }

    public takePicture() {
        console.log(`${this.type}: say cheese...`)
    }

    public turnOn() {
        console.log(`${this.type} turning on...`)
    }

    public turnOff() {
        console.log(`${this.type} turning off...`)
    }


}




