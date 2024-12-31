import Shape from "./shape.js";
export default class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
