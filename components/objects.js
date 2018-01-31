/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:objects" from the command line to test).
 */
class ObjectDrills {
    /**
     * Takes in one parameter (object) and returns it
     */
    identity() {

    }

    /**
     * Takes in two parameters (string and an object in that order), returns
     * the value of the object corresponding to the string. The string
     * passed in represents an individual property on the object.
     *
     * @example value('name', { name: 'John', age: 57 }) -> 'John'
     */
    value() {

    }

    /**
     * Takes in one parameter (object), returns the number of properties
     * that the object has.
     *
     * @example length({ name: 'John', age: 57 }) -> 2
     */
    length() {

    }

    /**
     * Takes in one parameter (object), returns an array of the properties
     * on the object.
     *
     * @example keys({ name: 'John', age: 57 }) -> ['name', 'age']
     */
    keys() {

    }

    /**
     * Takes in one parameter (object), returns an array of the values
     * on the object.
     *
     * @example keys({ name: 'John', age: 57 }) -> ['John', 57]
     */
    values() {

    }

    /**
     * Takes in two parameters (string and object in that order), return
     * true if the object has a property with the specified string.
     *
     * @example hasProperty('name', { name: 'John', age: 57 }) -> true
     */
    hasProperty() {

    }

    /**
     * Takes in two parameters (both objects), merges the first object into
     * the second object. If property names conflict, the properties from
     * the second object are used.
     *
     * @example merge({ name: 'John', age: 57 }, { phone: '5555555555' }) -> { name: 'John', age: 57, phone: '5555555555' }
     * @example merge({ name: 'John', age: 57 }, { name: 'Jane', phone: '5555555555' }) -> { name: 'Jane', age: 57, phone: '5555555555' }
     */
    merge() {

    }

    /**
     * Takes in two parameters (string and an object in that order),
     * returns the value corresponding to the string. The string
     * passed in is a path to a value in the object. If the string path is
     * not found in the object, returns undefined.
     *
     * @example get('address.city', { address: { city: 'Atlanta' } }) -> 'Atlanta'
     */
    get() {

    }

    /**
     * Takes in two parameters (string and object in that order), returns
     * a new object with the property represented by the string removed
     *
     * @example omit('name', { name: 'John', age: 57 }) -> { age: 57 }
     */
    omit() {

    }

    /**
     * Takes in two parameters (array of strings and object in that order),
     * returns a new object with all the properties in the array removed
     *
     * @example omitAll(['name', 'phone'], { name: 'John', age: 57, phone: '5555555555' }) -> { age: 57 }
     */
    omitAll() {

    }

    /**
     * Takes in one parameter (object), returns an array of arrays. Each
     * internal array has two values, the first represents the property
     * name and the second represents the property value.
     *
     * @example toPairs({ name: 'John', age: 57 }) -> [['name', 'John'], ['age', 57]]
     */
    toPairs() {

    }
}

module.exports = new ObjectDrills();
