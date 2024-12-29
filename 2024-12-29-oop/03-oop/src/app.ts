// this is a literal object
// const car = {
//     make: 'Nissan',
//     model: 'Micra'
// }

import Car from "./car.js"

const micra = new Car()
micra.make = 'nissan'
micra.model = 'micra'
micra.diesel = false
micra.year = 2020
micra.price = 13000

console.log(micra)
micra.drive()

const maxima = new Car()
maxima.make = 'nissan'
maxima.model = 'maxima'
maxima.diesel = true
maxima.year = 2015
maxima.price = 113000

console.log(maxima)
maxima.drive()