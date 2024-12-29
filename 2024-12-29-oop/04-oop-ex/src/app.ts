import Mobile from "./mobile.js";
console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`)
const iphone = new Mobile('iPhone', 6.9, 5500, 3)
console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`)

iphone.takePicture()
iphone.turnOff()
iphone.turnOn()
iphone.displaySaleInfo()
console.log(`pincode is: ${iphone.getPinCode()}`)
console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`)

const samsung = new Mobile('Samsung', 7.2, 4000, 5)
console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`)

samsung.takePicture()
samsung.turnOff()
samsung.turnOn()
samsung.displaySaleInfo()
console.log(`pincode is: ${samsung.getPinCode()}`)
