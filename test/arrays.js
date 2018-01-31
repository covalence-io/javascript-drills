import test from 'ava';
import component from '../components/arrays';

test('ArrayDrills.identity', (t) => {
    let arr = [0, 1, 2];
    t.is(component.identity(arr), arr);
});

test('ArrayDrills.value', (t) => {
    t.is(component.value(2, [0, 1, 2]), 2);
});

test('ArrayDrills.length', (t) => {
    t.is(component.length([0, 1, -1]), 3);
});

test('ArrayDrills.sum', (t) => {
    t.is(component.sum([0, 1, -1]), 0);
    t.is(component.sum([0, 1, 2]), 3);
});

test('ArrayDrills.square', (t) => {
    t.deepEqual(component.square([0, 1, -1]), [0, 1, 1]);
    t.deepEqual(component.square([2, 3, 4]), [4, 9, 16]);
});

test('ArrayDrills.add', (t) => {
    t.deepEqual(component.add(3, [0, 1, -1]), [3, 4, 2]);
    t.deepEqual(component.add(3, [2, 3, 4]), [5, 6, 7]);
});

test('ArrayDrills.combine', (t) => {
    t.deepEqual(component.combine([0, 1, 2], [2, 6, 6]), [0, 1, 2, 2, 6, 6]);
});

test('ArrayDrills.reverse', (t) => {
    t.deepEqual(component.reverse(['cat', 'dog', 1, 'panda', true]), [true, 'panda', 1, 'dog', 'cat']);
});

test('ArrayDrills.sort', (t) => {
    t.deepEqual(component.sort([5, 2, 6, 10, 12]), [2, 5, 6, 10, 12]);
    t.deepEqual(component.sort(['dog', 'cat', 'zebra', 'panda']), ['cat', 'dog', 'panda', 'zebra']);
    t.deepEqual(component.sort([true, null, [], undefined, {}]), []);
});

test('ArrayDrills.union', (t) => {
    t.deepEqual(component.union([0, 1, 2], [2, 6, 6]), [0, 1, 2, 6]);
});

test('ArrayDrills.intersect', (t) => {
    t.deepEqual(component.intersect([0, 1, 2], [2, 6, 6]), [2]);
});

test('ArrayDrills.difference', (t) => {
    t.deepEqual(component.difference([0, 1, 2], [2, 6, 6]), [0, 1]);
});

test('ArrayDrills.defined', (t) => {
    t.deepEqual(component.defined([0, true, null, 'panda', NaN, 100]), [0, true, 'panda', 100]);
});

test('ArrayDrills.remove', (t) => {
    t.deepEqual(component.remove(0, [0, true, null, 'panda', NaN, 100]), [true, null, 'panda', NaN, 100]);
    t.deepEqual(component.remove(0, [0, true, null, 'panda', 0, 100]), [true, null, 'panda', 100]);
    t.deepEqual(component.remove(0, [0, 0, 0, 0, 0, 0]), []);
});

test('ArrayDrills.flatten', (t) => {
    t.deepEqual(component.flatten([1, 4, [2], [['panda'], [[true]]]]), [1, 4, 2, 'panda', true]);
});

test('ArrayDrills.findMissingNumber', (t) => {
    t.is(component.findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);
});

