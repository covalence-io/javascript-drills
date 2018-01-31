import test from 'ava';
import component from '../components/numbers';

test('NumberDrills.identity', (t) => {
    t.deepEqual(component.identity(2), 2);
});

test('NumberDrills.add', (t) => {
    t.is(component.add(2, 3), 5);
});

test('NumberDrills.subtract', (t) => {
    t.is(component.subtract(2, 3), -1);
});

test('NumberDrills.multiply', (t) => {
    t.is(component.multiply(2, 3), 6);
});

test('NumberDrills.divide', (t) => {
    t.is(component.divide(2, 3), 2 / 3);
});

test('NumberDrills.mod', (t) => {
    t.is(component.mod(2, 3), 2 % 3);
});

test('NumberDrills.isGreater', (t) => {
    t.false(component.isGreater(2, 3));
    t.true(component.isGreater(3, 2));
});

test('NumberDrills.isLess', (t) => {
    t.true(component.isLess(2, 3));
    t.false(component.isLess(3, 2));
});

test('NumberDrills.isEven', (t) => {
    t.true(component.isEven(20));
    t.false(component.isEven(23));
});

test('NumberDrills.isOdd', (t) => {
    t.false(component.isOdd(20));
    t.true(component.isOdd(23));
});

test('NumberDrills.isDivisibleBy', (t) => {
    t.true(component.isDivisibleBy(20, 4));
    t.false(component.isDivisibleBy(21, 4));
});
