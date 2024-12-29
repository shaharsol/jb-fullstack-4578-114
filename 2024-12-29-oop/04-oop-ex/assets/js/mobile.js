export default class Mobile {
    // methods
    constructor(type, screenSize, price, numberOfCameras) {
        this.pinCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        this.type = type;
        this.screenSize = screenSize;
        this.price = price;
        this.numberOfCameras = numberOfCameras;
    }
    displaySaleInfo() {
        console.log(`A ${this.type} with screen ${this.screenSize}" for sale for ${this.price}`);
    }
    getPinCode() {
        return this.pinCode;
    }
    takePicture() {
        console.log(`${this.type}: say cheese...`);
    }
    turnOn() {
        console.log(`${this.type} turning on...`);
    }
    turnOff() {
        console.log(`${this.type} turning off...`);
    }
}
