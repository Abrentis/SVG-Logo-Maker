const {getScale} = require('color2k');
const colorName = require('color-name');

class Triangle {
    constructor(initials, textColorChoice, shapeColorChoice) {
        this.textColorChoice = this.getTextColor(textColorChoice);
        this.shapeColorChoice = this.getShapeColor(shapeColorChoice);
        this.initials = initials;
    }
    // Function that gets the correct text color
    getTextColor(textColorChoice) {
        let textColorSelect;
        // Checks for hexadecimal value
        if (textColorChoice.startsWith('#')) {
            const scale = getScale(textColor, textColor);
            textColorSelect = scale(0);
        }
        else {
            textColorSelect = `rgb(${colorName[textColorChoice]})`;
        }
        return textColorSelect;
    }
    // Function that gets the correct shape color
    getShapeColor(shapeColorChoice) {
        let shapeColorSelect;
        // Checks for hexadecimal value
        if (shapeColorChoice.startsWith('#')) {
            const scale = getScale(shapeColor, shapeColor);
            shapeColorSelect = scale(0);
        }
        else {
            shapeColorSelect = `rgb(${colorName[shapeColorChoice]})`;
        }
        return shapeColorSelect;
    };
    triangleCode() {
        if (this.textColorChoice.includes("undefined")) {
            throw new Error('The color you chose for your text was invalid!');
        }
        if (this.shapeColorChoice.includes("undefined")) {
            throw new Error('The color you chose for your shape was invalid!');
        }
        else {
            return `
            <svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 250,200 50,200" fill="${this.shapeColorChoice}" />
                <text font-size="50px" text-anchor="middle" alignment-baseline="middle" x="150px" y="120px" fill="${this.textColorChoice}">${this.initials}</text>
            </svg>
        `
        }
    }
}
       
module.exports = Triangle;