let functions = require(`./functions.js`)

test(`this test should return the number 2`, () => {
    expect(functions.returnTwo()).toBe(2)
})

test(`this test should return the name entered`, () => {
    expect(functions.greeting('James')).toBe(`Hello, James.`)
    expect(functions.greeting('Jill')).toBe(`Hello, Jill.`)
})


describe(`Math functions`, () => {
    test(`this test should return the sum of two numbers`, () => {
        expect(functions.add(1, 2)).toBe(3)
        expect(functions.add(5, 9)).toBe(14)
    })
    test(`this test should return two numbers divided`, () => {
        expect(functions.divide(20, 5)).toBe(4)
    })
    test(`this test should return two numbers multiplied`, () => {
        expect(functions.multiply(5, 2)).toBe(10)
    })
    test(`this test should return two numbers subtracted`, () => {
        expect(functions.subtract(12, 4)).toBe(8)
    })
    
    

})