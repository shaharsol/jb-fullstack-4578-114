import Cat from './cat.js'
import Dog from './dog.js'

const gingo = new Cat(
    'orange',
    'mixed',
    1000,
    3
)

gingo.display()
console.log(gingo.getPrice())

const lucky = new Dog(
    'gold',
    'chinese pug',
    5000,
    true
)

lucky.display()
console.log(lucky.getBreed())