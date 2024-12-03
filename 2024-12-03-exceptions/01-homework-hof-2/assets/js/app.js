const getRandomBetween0And100 = () => Math.floor(Math.random() * 101)

const getRandomPoint = () => ({
    x: getRandomBetween0And100(),
    y: getRandomBetween0And100()
})

const points = []
for (let i=0 ; i < 20; i++) {
    points.push(getRandomPoint())
}

console.log('all the points')
points.forEach(point => console.log(point))

console.log('first point where x > y')
console.log(points.find(point => point.x > point.y))

console.log('first point where y > 50')
console.log(points.find(point => point.y > 50))
console.log(points.find(({ y }) => y > 50))

console.log('all points where y is even')
console.log(points.filter(point => point.y % 2 === 0))

console.log('all points where x is odd')
console.log(points.filter(point => point.x % 2 !== 0))

console.log('all points where y > 50')
console.log(points.filter(point => point.y > 50))

console.log('index of first point where x > 50')
console.log(points.findIndex(point => point.x > 50))

points
    .map(point => Math.sqrt(point.x ** 2 + point.y ** 2))
    .forEach(point => console.log(point))

console.log('minimal x')
console.log(points.reduce((minimum, current) => current.x < minimum ? current.x : minimum, Infinity))
// another version using object destructuring
console.log(points.reduce((minimum, { x }) => x < minimum ? x : minimum, Infinity))

