export default class Mobile {

    // data members / class fields
    type: string
    screenSize: number
    price: number
    numberOfCameras: number

    // methods
    takePicture() {
        console.log(`${this.type}: say cheese...`)
    }

    turnOn() {
        console.log(`${this.type} turning on...`)
    }

    turnOff() {
        console.log(`${this.type} turning off...`)
    }


}

