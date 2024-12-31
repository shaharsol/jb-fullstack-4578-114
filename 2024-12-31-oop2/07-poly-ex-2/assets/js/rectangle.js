import Shape from "./shape.js";
export default class Rectangle extends Shape {
    length;
    width;
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}
