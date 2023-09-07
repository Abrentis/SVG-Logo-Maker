const inquirer = require('inquirer');
const colorName = require('color-name');
const color2k = require('color2k');
const fs = require('fs');
//color2k?

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
            name: 'text-color',
            message: 'Enter a color for the color of the text (for specific colors, enter a hexidecimal number)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo.',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Enter a color for the color of the shape (for specific colors, enter a hexidecimal number)',
        },
    ])
    .then(() => {

    })