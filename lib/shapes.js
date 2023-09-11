const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");
// Function that checks the shape selected then creates a new instance of that shape.
function shapes(data) {
    if (data.shape == "circle") {
        const newCircle = new Circle(data.initials, data.textColor, data.shapeColor);
        return newCircle.circleCode();
    }
    else if (data.shape == "triangle") {
        const newTriangle = new Triangle(data.initials, data.textColor, data.shapeColor);
        return newTriangle.triangleCode();
    }
    else {
        const newSquare = new Square(data.initials, data.textColor, data.shapeColor);
        return newSquare.squareCode();
    };
}

module.exports = shapes;