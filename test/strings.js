import test from 'ava';
import component from '../components/strings';

test('StringDrills.identity', (t) => {
    t.deepEqual(component.identity('Hello'), 'Hello');
});

test('StringDrills.combine', (t) => {
    t.is(component.combine('Hello', ' World'), 'Hello World');
});

test('StringDrills.length', (t) => {
    t.is(component.length(''), 0);
    t.is(component.length('a'), 1);
    t.is(component.length('ab'), 2);
});

test('StringDrills.isEmpty', (t) => {
    t.true(component.isEmpty(''));
    t.false(component.isEmpty('foo'));
});

test('StringDrills.toArray', (t) => {
    t.is(component.toArray('Hello World').length, 2);
    t.is(component.toArray('Hello World')[0], 'Hello');
    t.is(component.toArray('Hello World')[1], 'World');
});

test('StringDrills.clip', (t) => {
    t.is(component.clip('Hello', 4), 'Hell');
});

test('StringDrills.reverse', (t) => {
    t.is(component.reverse('Hello'), 'olleH');
});

test('StringDrills.truncate', (t) => {
    t.is(component.truncate('', 5), '');
    t.is(component.truncate('Hello', 3), 'Hello');
    t.is(component.truncate('Hello', 4), 'H...');
    t.is(component.truncate('Hello', 5), 'He...');
    t.is(component.truncate('Hello', 8), 'Hello');
});

test('StringDrills.strip', (t) => {
    t.is(component.strip(' Hello '), 'Hello');
    t.is(component.strip('Hello'), 'Hello');
});

test('StringDrills.repeat', (t) => {
    t.is(component.repeat('a', 2), 'aa');
    t.is(component.repeat('a', 3), 'aaa');
});

test('StringDrills.contains', (t) => {
    t.true(component.contains('ab', 'b'));
    t.false(component.contains('ab', 'c'));
});
