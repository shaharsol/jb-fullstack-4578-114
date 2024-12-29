import Mobile from "./mobile.js";

const iphone = new Mobile('iPhone', 6.9, 5500, 3)

iphone.takePicture()
iphone.turnOff()
iphone.turnOn()
iphone.displaySaleInfo()
console.log(`pincode is: ${iphone.getPinCode()}`)

const samsung = new Mobile('Samsung', 7.2, 4000, 5)

samsung.takePicture()
samsung.turnOff()
samsung.turnOn()
samsung.displaySaleInfo()
console.log(`pincode is: ${samsung.getPinCode()}`)
