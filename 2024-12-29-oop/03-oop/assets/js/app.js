// this is a literal object
// const car = {
//     make: 'Nissan',
//     model: 'Micra'
// }
import Car from "./car.js";
const micra = new Car('nissan', 'micra', false, 2020, 13000);
// micra.init('nissan', 'micra', false, 2020, 13000)
// micra.make = 'nissan'
// micra.model = 'micra'
// micra.diesel = false
// micra.year = 2020
// micra.price = 13000
// micra.serialNumber = -10
micra.displaySerialNumber();
console.log(micra);
micra.drive();
// console.log(`A ${micra.year} ${micra.make} ${micra.model} for sale for ${micra.price}`)
micra.displaySaleInfo();
Car.horn();
micra.hornSpecific();
const maxima = new Car('nissan', 'maxima', true, 2015, 113000);
// maxima.init('nissan', 'maxima', true, 2015, 113000 )
// maxima.make = 'nissan'
// maxima.model = 'maxima'
// maxima.diesel = true
// maxima.year = 2015
// maxima.price = 113000
// maxima.serialNumber = 3
console.log(maxima);
maxima.drive();
// console.log(`A ${maxima.year} ${maxima.make} ${maxima.model} for sale for ${maxima.price}`)
maxima.displaySaleInfo();
