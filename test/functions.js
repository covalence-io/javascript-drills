import test from 'ava';
import * as component from '../components/functions';

test('FunctionDrills fizzbuzz', (t) => {
    t.is(component.fizzbuzz(3), 'Fizz');
    t.is(component.fizzbuzz(5), 'Buzz');
    t.is(component.fizzbuzz(6), 'Fizz');
    t.is(component.fizzbuzz(25), 'Buzz');
    t.is(component.fizzbuzz(30), 'FizzBuzz');
    t.is(component.fizzbuzz(-1), '.');
});

test('FunctionDrills factorial', (t) => {
    t.is(component.factorial(3), 6);
    t.is(component.factorial(10), 3628800);
    t.is(component.factorial(11), 3628800 * 11);
});

test.only('FunctionDrills fib', (t) => {
    t.is(component.fib(0), 0);
    t.is(component.fib(1), 1);
    t.is(component.fib(2), 1);
    t.is(component.fib(3), 2);
    t.is(component.fib(4), 3);
    t.is(component.fib(5), 5);
    t.is(component.fib(6), 8);
    t.is(component.fib(7), 13);
    t.is(component.fib(8), 21);
    t.is(component.fib(9), 34);
});

test('FunctionDrills identity', (t) => {
    t.is(
        component.identity((value) => {
            return value;
        }, 1),
        1
    );

    t.is(
        component.identity(
            (value) => {
                return value.name;
            },
            { name: 'Hello' }
        ),
        'Hello'
    );

    t.is(
        component.identity(
            (value) => {
                return 'Hello';
            },
            { name: 'Hello' }
        ),
        'Hello'
    );

    t.is(component.identity(() => {}), undefined);
    t.is(component.identity(() => {}, 'Hello'), undefined);
});

test.cb('FunctionDrills wait', (t) => {
    component.wait(
        (value) => {
            t.is(value, 'Hello');
            t.end();
        },
        'Hello',
        200
    );

    component.wait(
        (value) => {
            t.is(value, 1);
        },
        1,
        100
    );
});

test('FunctionDrills once', (t) => {
    const sum = component.once((a, b, c) => {
        return a + b + c;
    });

    const mult = component.once((...args) => {
        return args.reduce((m, c) => m * c, 1);
    });

    t.is(sum(1, 2, 3), 6);
    t.is(sum(3, 4, 5, 6, 7, 8, 9, 10), 6);
    t.is(mult(1, 2, 3, 4, 5), 5 * 4 * 3 * 2 * 1);
    t.is(mult(1, 2, 3, 4, 5, 6, 7), 5 * 4 * 3 * 2 * 1);
});

test('FunctionDrills memoize', (t) => {
    let called = false;
    const memo = component.memoize((value) => {
        called = true;

        return value;
    });

    t.false(called);
    t.is(memo(3), 3);
    t.true(called);
    called = false;
    t.is(memo(3), 3);
    t.false(called);
});

test('FunctionDrills curry', (t) => {
    const greetHello = component.curry((greeting, name) => {
        return `${greeting}, ${name}!`;
    });

    t.is(greetHello('Hello')('Heidi'), 'Hello, Heidi!');
    t.is(greetHello('Hello', 'Heidi'), 'Hello, Heidi!');

    const add = component.curry((a, b, c, d, e) => {
        return a + b + c + d + e;
    });

    t.is(add(1)(2)(3)(4)(5), 15);
    t.is(add(1)(2)(3)(4, 5), 15);
    t.is(add(1)(2)(3, 4, 5), 15);
    t.is(add(1)(2, 3, 4, 5), 15);
    t.is(add(1, 2, 3, 4, 5), 15);
});
