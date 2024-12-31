import Shape from "./shape.js";
export default class Square extends Shape {
    length;
    constructor(length) {
        super();
        this.length = length;
    }
    getArea() {
        return this.length ** 2;
    }
}
