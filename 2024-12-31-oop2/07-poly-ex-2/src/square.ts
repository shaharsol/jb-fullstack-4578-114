import Shape from "./shape.js";

export default class Square extends Shape {

    constructor (
        private length: number
    ) {
        super()
    }
    
    getArea(): number {
        return this.length ** 2
    }
}