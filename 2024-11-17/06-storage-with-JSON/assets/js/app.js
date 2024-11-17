const shoppingCart = [
    {
        id: 1,
        name: 'Lenovo laptop',
        price: 1000
    },
    {
        id: 2,
        name: 'HP screen 25"',
        price: 600
    },
    {
        id: 3,
        name: 'Logitech mouse',
        price: 20
    }
]
// save the data as JSON in local storage
localStorage.setItem('products', JSON.stringify(shoppingCart))

// retrieve the data and parse back to object
const info = JSON.parse(localStorage.getItem('products'))
console.log(info[2])