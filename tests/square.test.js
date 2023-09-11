const Square = require("../lib/square.js")

describe('Square', () => {
    test('test should throw error', () => {
        const testTriangle = new Square("BMK", "read", "green");
        expect(() => testTriangle.squareCode()).toThrowError('The color you chose for your text was invalid!');
    })
})