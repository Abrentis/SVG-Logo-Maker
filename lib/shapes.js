const {getScale} = require('color2k');
const colorName = require('color-name');
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

function shapes(data) {
    // Function that gets the correct text color
    // getTextColor = (data) => {
    //     let textColorSelect;
    //     const textColor = data.textColor;
    //     // Checks for hexadecimal value
    //     if (textColor.startsWith('#')) {
    //         const scale = getScale(textColor, textColor);
    //         textColorSelect = scale(0);
    //     }
    //     else {
    //         textColorSelect = `rgb(${colorName[textColor]})`;
    //     }
    //     return textColorSelect;
    // };
    // // Function that gets the correct shape color
    // getShapeColor = (data) => {
    //     let shapeColorSelect;
    //     const shapeColor = data.shapeColor;
    //     // Checks for hexadecimal value
    //     if (shapeColor.startsWith('#')) {
    //         const scale = getScale(shapeColor, shapeColor);
    //         shapeColorSelect = scale(0);
    //     }
    //     else {
    //         shapeColorSelect = `rgb(${colorName[shapeColor]})`;
    //     }
    //     return shapeColorSelect;
    // };
    // Creates template literal depending on shape selected by user
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