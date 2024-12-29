import Animal from './animal.js'
import Cat from './cat.js'
import Dog from './dog.js'
import Fish from './fish.js'
import SiameseCat from './siamese-cat.js'

const gingo = new Cat(
    'orange',
    'mixed',
    1000,
    3
)

gingo.display()
gingo.inhale()
console.log(gingo.getPrice())

const lucky = new Dog(
    'gold',
    'chinese pug',
    5000,
    true
)

lucky.display()
console.log(lucky.getBreed())

const nemo = new Fish(
    'gold',
    'Lokus',
    10,
    false
)
nemo.display()

const jackieChan = new SiameseCat(
    'black',
    1000,
    9
)
jackieChan.display()


console.log(`number of animals in shop is ${Animal.getNumberOfAnimals()}`)