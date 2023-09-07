const inquirer = require('inquirer');
const shapes = require('./shapes.js')
const fs = require('fs');

// Function that starts 'inquirer' and prompts the user, calls the data from 'shapes.js,' and writes the SVG file.
function CLI() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'initials',
            message: 'Enter up to three characters.',
            validate: function (input) {
                if (input.length > 3 || input.length == 0 || input.length == undefined) {
                    return `Please enter up to three characters.`;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color to color your text (for specific colors, enter a hexidecimal number, preceded by a hashtag. Ex: #befba3).',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo.',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color to color your shape (for specific colors, enter a hexidecimal number, preceded by a hashtag. Ex: #befba3).',
        },
    ])
    .then((data) => {
        const SVGContent = shapes(data);

        fs.writeFile('PersonalLogo.svg', SVGContent, (err) =>
        err ? console.log(err) : console.log('Successfully created PersonalLogo.svg.'))
    })
    .catch((err) => {
        console.log(err);
        console.log('Error occurred.');
    })
}

module.exports = CLI;