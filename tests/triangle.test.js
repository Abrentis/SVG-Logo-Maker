const Triangle = require("../lib/triangle.js")

describe('Triangle', () => {
    test('test should throw error', () => {
        const testTriangle = new Triangle("BMK", "red", "grean");
        expect(() => testTriangle.triangleCode()).toThrowError('The color you chose for your shape was invalid!');
    })
})