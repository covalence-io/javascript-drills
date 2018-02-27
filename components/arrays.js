/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:arrays" from the command line to test).
 */
class ArrayDrills {
    /**
     * Takes in one parameter (array) and returns it
     */
    identity(arr) {
        return arr;
    }

    /**
     * Takes in two parameters (number and an array in that order), returns
     * the value of the array at the corresponding number index.
     *
     * @example value(2, [0, 1, 3, 2]) -> 3
     */
    value() {

    }

    /**
     * Takes in one parameter (array), returns its length
     */
    length() {

    }

    /**
     * Takes in an array of numbers as a parameter, returns the smallest number in the Array.
     *
     * @example min([2, 1, 4, 6, 0]) -> 0
     */
    min() {

    }

    /**
     * Takes in an array of numbers as a parameter, returns the max number in the Array.
     *
     * @example min([2, 1, 4, 6, 0]) -> 6
     */
    max() {

    }

    /**
     * Takes in one parameter (array of numbers), calculates the sum and
     * returns it
     *
     * @example sum([1, 2, 3, -2]) -> 4
     */
    sum() {

    }

    /**
     * Takes in an array of values representing cards. Returns the total count
     * of the "cards" in the array.
     *
     * For values 2, 3, 4, 5, 6 increment the count by 1
     * For values 7, 8, 9 the count remains the same
     * For values 10, 'J', 'Q', 'K', 'A' decrement the count by 1
     *
     * return the total count of all the cards in the array
     *
     * @example count(['A', 7, 3, 'J']) -> -1
     */
    count() {

    }

    /**
     * Takes in one parameter (array), returns a new array with values equal to
     * the values in the original array squared.
     *
     * @example square([2, 3, 4]) -> [4, 9, 16]
     */
    square() {

    }

    /**
     * Takes in two parameters (number and array in that order), returns a new array
     * with values equal to the values in the original array plus the number passed in.
     *
     * @example add(2, [2, 3, 4]) -> [4, 5, 6]
     */
    add() {

    }

    /**
     * Takes in two parameters (number and array in that order), returns true if the
     * number is found in the array
     *
     * @example contains(3, [1, 3, 2]) -> true
     * @example contains(3, [1, 2, 2]) -> false
     */
    contains() {

    }

    /**
     * Takes in two parameters (arrays), merges them together and
     * returns a single combined array.
     *
     * @example combine([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 2, 3, 5]
     */
    combine() {

    }

    /**
     * Takes in one parameter (array), reverses the array and returns.
     *
     * @example reverse([1, 2, 4, 3]) -> [3, 4, 2, 1]
     */
    reverse() {

    }

    /**
     * Takes in one parameter (array). If numbers, sorts by number,
     * if strings, sorts alphabetically by first letter, else returns
     * an empty array
     *
     * @example sort([1, 2, 4, 3]) -> [1, 2, 3, 4]
     * @example sort(['Apple', 'Pear', 'Baseball', 'Banana']) -> ['Apple', 'Banana', 'Baseball', 'Pear']
     */
    sort() {

    }

    /**
     * Takes in two parameters (arrays), returns the union of the two sets
     * in the order they were first seen.
     *
     * @example union([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 5]
     */
    union() {

    }

    /**
     * Takes in two parameters (arrays), returns the intersect of the two sets
     * in the order they were first seen.
     *
     * @example intersect([1, 2, 3, 4], [2, 3, 5]) -> [2, 3]
     */
    intersect() {

    }

    /**
     * Takes in two parameters (arrays), returns an array of the elements in the
     * first parameter that are not in the second in the order they were first
     * seen.
     *
     * @example difference([1, 2, 3, 4], [2, 3, 5]) -> [1]
     */
    difference() {

    }

    /**
     * Takes in one parameter (array), returns an array of only defined values
     * (no null, undefined, or NaN values) in the order they were first seen.
     *
     * @example defined([1, NaN, undefined, null, 3, null, 4, 0]) -> [1, 3, 4, 0]
     */
    defined() {

    }

    /**
     * Takes in two parameters (number then array), returns an array in the same
     * order it was input containing no instances of the number.
     *
     * @example remove(3, [1, 2, 4, 3, 5, 3]) -> [1, 2, 4, 5]
     */
    remove() {

    }

    /**
     * Takes in one parameter (array) and returns a flattened array with
     * values in the order they were first seen
     * (meaning if the input array has other arrays in it, the values
     * of those arrays will be bubbled up to be value first class members
     * of the return array)
     *
     * @example flatten([0, 1, [2], [[3], [4]]]) -> [0, 1, 2, 3, 4]
     */
    flatten() {

    }

    /**
     * Takes in one parameter (array), which contains values 1-(length+1) of the array
     * with a random number missing. Returns the missing number.
     *
     * For example, if the array's length is 10, it will have numbers 1-11 with
     * 1 number missing.
     *
     * @example findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) -> 5
     */
    findMissingNumber() {

    }
}

module.exports = new ArrayDrills();
