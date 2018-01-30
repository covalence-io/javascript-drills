import test from 'ava';
import component from '../components/arrays';

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
