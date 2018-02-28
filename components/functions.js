/**
 * Fill out the logic for the functions in this file so that they
 * pass the tests (run "npm run test:functions" from the command line to test).
 *
 * NOTE: Sometimes it is easier to call other functions to build your logic than it is to
 * re-code/copy logic.
 */

/**
 * Takes in a number as a parameter, if the number is divisible by 3, returns 'Fizz'. If the number is
 * divisible by 5, returns 'Buzz'. If the number is divisible by 3 and 5, returns 'FizzBuzz'.
 * If the number is not divisible by 3 or 5, returns '.'.
 */
function fizzbuzz() {}

/**
 * Takes in a number and returns the factorial of the number (i.e. 5! = 5 * 4 * 3 * 2 * 1 = 120)
 */
function factorial() {}

/**
 * Takes in a number as a parameter, outputs the index value in the Fibonacci sequence represented by the number
 *
 * @example fib(6) -> 8
 */
function fib() {

}

/**
 * Takes in a function as a parameter and another value of any type as the second parameter. Calls the function and passes the value to it. Returns the result.
 *
 * @example identity((value) => { return value }, 1) -> 1
 */
function identity() {}

/**
 * Takes in a function as a parameter, another value of any type as the second parameter, as well as a number as the third parameter. Calls the function and passes the value to it after waiting for a period of time equal to the passed in number (in milliseconds).
 *
 * @example identity((value) => { return value }, 'Hello', 3000) -> undefined // calls function after 3000 milliseconds with 'Hello' as the argument
 */
function wait() {}

/**
 * Creates a function that is restricted to invoking a parameter function once. Repeat calls to the
 * function return the value of the first invocation. The function is invoked with the arguments of
 * the created function.
 *
 * HINT: Look into rest parameters:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *
 * @example let sum = once((a, b, c) => { return a + b + c; });
 *          sum(1, 2, 3) -> 6
 *          sum(15, 12, 3) -> 6
 */
function once() {}

/**
 * Creates a function that memoizes the result of a parameter function. The first argument provided to
 * the memoized function is used as the map cache key.
 *
 * Memoization is used to optimize recurring function calls by storing the results of the calls and
 * returning the cached result when the same inputs occur again.
 *
 * @example let memoFactorial = memoize(factorial);
 *          memoFactorial(3) -> 6 // factorial function is called
 *          memoFactorial(3) -> 6 // factorial function is not called
 */
function memoize() {}

/**
 * Takes in a function as an argument. Creates a function that "builds" arguments as you call it,
 * returning a new function until all the arguments have been passed in.
 *
 * HINT: Look at Function.length:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
 *
 * Also look at Function.prototype.bind:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 *
 * Also look at arguments:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *
 * @example const add = component.curry((a, b, c, d, e) => {
 *              return a + b + c + d + e;
 *          });
 *          add(1)(2)(3)(4, 5) -> 15
 *          add(1)(2)(3, 4, 5) -> 15
 */
function curry() {}

module.exports = {
    fizzbuzz,
    factorial,
    fib,
    identity,
    wait,
    once,
    memoize,
    curry,
};

[
    {
        'repeat(5, 10)': {
            _id: '{{objectId()}}',
            name: {
                first: '{{firstName()}}',
                middle: '{{firstname()}}',
                last: '{{surname()}}'
            },
            age: '{{integer(20, 45)}}',
            birthday: function(tags) {
                return moment(this.date(new Date(tags.integer(1980, 1999), tags.integer(0, 11), tags.integer(1, 25))))
            }
        }
    }
]
