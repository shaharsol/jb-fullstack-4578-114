export default class Animal {
    
    // this is a statful class
    // meaning, it holds its own data
    // state = data

    public constructor (
        public numberOfLungs: number
    ) {

    }
    
    breath() {
        console.log(`breathing with my ${this.numberOfLungs} lungs`)
    }
}