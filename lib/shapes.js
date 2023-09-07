const {getScale} = require('color2k');
const colorName = require('color-name');

function shapes(data) {
    // Function that gets the correct text color
    textColor = (data) => {
        let textColorSelect;
        const textColor = data.textColor;
        // Checks for hexadecimal value
        if (textColor.startsWith('#')) {
            const scale = getScale(textColor, textColor);
            textColorSelect = scale(0);
        }
        else {
            textColorSelect = `rgb(${colorName[textColor]})`;
        }
        return textColorSelect;
    };
    // Function that gets the correct shape color
    shapeColor = (data) => {
        let shapeColorSelect;
        const shapeColor = data.shapeColor;
        // Checks for hexadecimal value
        if (shapeColor.startsWith('#')) {
            const scale = getScale(shapeColor, shapeColor);
            shapeColorSelect = scale(0);
        }
        else {
            shapeColorSelect = `rgb(${colorName[shapeColor]})`;
        }
        return shapeColorSelect;
    };
    // Creates template literal depending on shape selected by user
    if (data.shape == "circle") {
        return `
        <svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150px" cy="100px" r="100px" fill="${shapeColor(data)}" />
            <text font-size="75px" text-anchor="middle" alignment-baseline="middle" x="150px" y="100px" fill="${textColor(data)}">${data.initials}</text>
        </svg>
        `
    }
    else if (data.shape == "triangle") {
        return `
        <svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 250,200 50,200" fill="${shapeColor(data)}" />
            <text font-size="50px" text-anchor="middle" alignment-baseline="middle" x="150px" y="120px" fill="${textColor(data)}">${data.initials}</text>
        </svg>
        `

    }
    else {
        return `
        <svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150px" cy="100px" r="100px" fill="${shapeColor(data)}" />
            <text font-size="75px" text-anchor="middle" alignment-baseline="middle" x="150px" y="100px" fill="${textColor(data)}">${data.initials}</text>
        </svg>
        `
    };
}

module.exports = shapes;