import test from 'ava';
import component from '../components/objects';

test('ObjectDrills.identity', (t) => {
    let obj = { test: 'foo' };
    t.deepEqual(component.identity(obj), obj);
});
