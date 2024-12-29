import Mobile from "./mobile.js";

const iphone = new Mobile()
iphone.type = 'iPhone'
iphone.screenSize = 6.9
iphone.price = 5500
iphone.numberOfCameras = 3

iphone.takePicture()
iphone.turnOff()
iphone.turnOn()

const samsung = new Mobile()
samsung.type = 'Samsung'
samsung.screenSize = 7.2
samsung.price = 4000
samsung.numberOfCameras = 5

samsung.takePicture()
samsung.turnOff()
samsung.turnOn()