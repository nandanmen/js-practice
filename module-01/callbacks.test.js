const functions = require('./callbacks');

test('Expects addTwo(3) to return 5', () => {
    expect(functions.addTwo(3)).toBe(5);
})

test('Expects addS(pizza) to return pizzas', () => {
    expect(functions.addS('pizza')).toBe('pizzas');
})

test('Expects map to correctly map [1,3,5] with addTwo', () => {
    expect(functions.map([1,3,5],functions.addTwo)).toEqual([3,5,7]);
})