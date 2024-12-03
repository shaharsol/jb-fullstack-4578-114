const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min

const generatePizza = () => ({
    diameter: getRandom(20, 50),
    slices: getRandom(4, 8),
    toppings: getRandom(0, 4),
    price: getRandom(40, 150)
})

const pizzas = []
for (let i=0 ; i < 20; i++) {
    pizzas.push(generatePizza())
}

console.log(pizzas)

console.log(pizzas.map(({diameter, slices, toppings, price}) => ({
    diameter,
    slices,
    toppings,
    price,
    vat: price * 0.17
})))

const myFunc = (a , b , c) => ({name: 'shahar'})
