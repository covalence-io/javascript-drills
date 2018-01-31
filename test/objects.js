import test from 'ava';
import component from '../components/objects';

test('ObjectDrills.identity', (t) => {
    let obj = { test: 'foo' };
    t.deepEqual(component.identity(obj), obj);
});

test('ObjectDrills.value', (t) => {
    t.is(component.value('name', { name: 'John', age: 57 }), 'John');
});

test('ObjectDrills.length', (t) => {
    t.is(component.length({ name: 'John', age: 57 }), 2);
});

test('ObjectDrills.keys', (t) => {
    t.deepEqual(component.keys({ name: 'John', age: 57 }), ['name', 'age']);
});

test('ObjectDrills.values', (t) => {
    t.deepEqual(component.values({ name: 'John', age: 57 }), ['John', 57]);
});

test('ObjectDrills.hasProperty', (t) => {
    t.true(component.hasProperty('name', { name: 'John', age: 57 }));
    t.false(component.hasProperty('John', { name: 'John', age: 57 }));
});

test('ObjectDrills.merge', (t) => {
    t.deepEqual(component.merge({ name: 'John', age: 57 }, { phone: '5555555555' }), { name: 'John', age: 57, phone: '5555555555' });
    t.deepEqual(component.merge({ name: 'John', age: 57 }, { name: 'Jane', phone: '5555555555' }), { name: 'Jane', age: 57, phone: '5555555555' });
});

test('ObjectDrills.get', (t) => {
    t.is(component.get('address.city', { address: { city: 'Atlanta' } }), 'Atlanta');
    t.is(component.get('address.city', { }), undefined);
});

test('ObjectDrills.omit', (t) => {
    t.deepEqual(component.omit('name', { name: 'John', age: 57 }), { age: 57 });
});

test('ObjectDrills.omitAll', (t) => {
    t.deepEqual(component.omitAll(['name', 'phone'], { name: 'John', age: 57, phone: '5555555555' }), { age: 57 });
});

test('ObjectDrills.toPairs', (t) => {
    t.deepEqual(component.toPairs({ name: 'John', age: 57 }), [['name', 'John'], ['age', 57]]);
    t.deepEqual(component.toPairs({ name: 'John', age: 57, phone: '5555555555' }), [['name', 'John'], ['age', 57], ['phone', '5555555555']]);
});
