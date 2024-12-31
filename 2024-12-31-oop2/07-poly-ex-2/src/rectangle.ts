import Shape from "./shape.js";

export default class Rectangle extends Shape {

    constructor (
        private length: number,
        private width: number
    ) {
        super()
    }
    getArea(): number {
        return this.length * this.width
    }
}