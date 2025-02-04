function Mammal(target: any): any {
    return class extends target {
        birthDate: Date = new Date()
    } 
} 

function Min(value: number) {
    return function(target: any, propertyKey: string) {
        let _value: number

        Object.defineProperty(target, propertyKey, {
            get: () => _value,
            set: (newValue: number) => {
                if (newValue < value) {
                    throw new Error(`${propertyKey} cannot be lower than ${value}`)
                }
                _value = newValue
            }
        })
    }
}

function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey} invoked with params:`, args)
        return originalMethod.apply(this, args)
    }
}

class Animal {

}

@Mammal
class Lion extends Animal {

    @Min(100)    
    weight: number;

    constructor(weight: number) {
        super()
        this.weight = weight
    }

    @Logger
    sayHello() {
        console.log('roaring.... ha hah ahahaahah')
    }
}

const simba = new Lion(400)
console.log(simba)

simba.weight = 500
console.log(simba)

// simba.weight = 50
// console.log(simba)

simba.sayHello()


