const Circle = require("../lib/circle.js")

// describe('Circle', () => {
//     test('test should be successful and show SVG code', () => {
//         const testCircle = new Circle("BMK", "red", "green");
//         const err = new Error('Please enter a valid value for the text color.')
//         expect(testCircle.circleCode).toThrow(err);
//     })
// })

describe('Circle', () => {
    test('test should be successful and show SVG code', () => {
        const testCircle = new Circle("BMK", "red", "green");
        expect(() => testCircle.circleCode()).not.toThrow();
    })
})