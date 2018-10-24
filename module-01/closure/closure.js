/* 
 * Create a function createFunction that creates and returns
 * a function. This created function should print 'hello'.
 */
function createFunction() {
    return function() { console.log('hello'); }
}

/* 
 * Create a function createFunctionPrinter that accepts
 * one input and returns a function that, when called, prints
 * out that input.
 */
function createFunctionPrinter(input) {
    return function() { console.log(input); }
}

/* 
 * Create a function addByX that returns a function that
 * will add an input by x.
 */
function addByX(num) {
    return function(input) {
        return num + input;
    }
}

/* 
 * Create a function once that accepts a callback as input
 * and returns a function. When the function is called for
 * the first time, it calls the callback. Any consecutive times
 * it should return the output from the first time it was called.
 */
function doOnce(func) {
    let isCalled = false;
    let result;
    return function(args) {
        if (!isCalled) {
            result = func(args);
            isCalled = true;
        }
        return result;
    }
}

/* 
 * Create a function after that takes the number of times the
 * callback needs to be called before it is executed.
 */
function doAfter(count, func) {
    let currCount = count;
    return function(args) {
        if (currCount <= 1) {
            func(args);
        } else {
            currCount--;
        }
    }
}

/* 
 * Write a function delay that accepts a callback as the
 * first parameter and the wait in milliseconds before
 * allowing the callback to be invoked as the second parameter.
 */
function delay(func, wait) {

}

module.exports = {
    createFunction,
    createFunctionPrinter,
    addByX,
    doOnce,
    doAfter,
    delay
}