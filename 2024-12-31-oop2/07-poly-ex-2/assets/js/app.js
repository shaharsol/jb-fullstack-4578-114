import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Square from "./square.js";
const input = +prompt('enter number between 1-3');
function getShape(input) {
    switch (input) {
        case 1:
            return new Square(10);
        case 2:
            return new Circle(10);
        case 3:
            return new Rectangle(10, 10);
    }
}
const shape = getShape(input);
console.log(`area of shape is ${shape.getArea()}`);
