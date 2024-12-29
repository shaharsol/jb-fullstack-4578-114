export default class Mobile {

    // data members / class fields
    private pinCode: number = Math.floor(Math.random() * (9999 - 1000)) + 1000
    public static totalMobilesCreated = 0
    

    // methods
    public constructor(
        private type: string, 
        private screenSize: number, 
        private price: number, 
        private numberOfCameras: number
    ) {
        Mobile.totalMobilesCreated ++
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




