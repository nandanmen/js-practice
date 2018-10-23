/* 
 * Create a function addTwo that accepts one input
 * and adds 2 to it.
 */
function addTwo(num) {
    return num + 2;
}

/* 
 * Create a function addS that accepts one input
 * and adds an "s" to it.
 */
function addS(word) {
    return word + "s";
}

/* 
 * Create a function called map that takes two inputs:
 *  1. an array of numbers
 *  2. a 'callback' function - a function that is applied
 *     to each element of the array.
 */
function map(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

/* 
 * Create a function forEach that takes an array and a callback,
 * and runs the callback on each element of the array.
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

/* 
 * Rebuild map as mapWith, using forEach in the body instead
 * of a for loop.
 */
function mapWith(array, callback) {
    let result = [];
    forEach(array, function(item) {
        result.push(callback(item));
    });
    return result;
}

/* 
 * Create a function reduce that takes an array and reduces
 * the elements to a single value based on callback.
 */
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    forEach(array, function(item) {
        acc = callback(acc, item);
    });
    return acc;
}

module.exports = {
    addTwo,
    addS,
    map,
    forEach,
    mapWith,
    reduce
}