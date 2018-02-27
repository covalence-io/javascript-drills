import test from 'ava';
import component from '../components/dates';

test('DateDrills identity', (t) => {
    let now = new Date();

    t.is(component.identity(now), now);
});

test('DateDrills isBefore', (t) => {
    let a = new Date();
    let b = new Date();
    b.setFullYear(b.getFullYear() + 1);

    t.true(component.isBefore(a, b));
    t.false(component.isBefore(b, a));
});

test('DateDrills isAfter', (t) => {
    let a = new Date();
    let b = new Date();
    b.setFullYear(b.getFullYear() - 1);

    t.true(component.isAfter(a, b));
    t.false(component.isAfter(b, a));
});

test('DateDrills isSame', (t) => {
    let a = new Date();
    let b = new Date();
    b.setTime(a.getTime());

    t.true(component.isSame(a, a));

    b.setTime(a.getTime() + 100);
    t.false(component.isSame(a, b));
});

test('DateDrills isBetween', (t) => {
    let a = new Date();
    let b = new Date();
    let c = new Date();
    b.setTime(a.getTime() - 100);
    c.setTime(a.getTime() + 100);

    t.true(component.isBetween(a, b, c));

    b.setTime(a.getTime() + 100);
    t.false(component.isBetween(a, b, c));
});

test('DateDrills dayOfWeek', (t) => {
    let a = new Date(1514163075588);
    let b = new Date(1519133075588);
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let aday = days[a.getDay()];
    let bday = days[b.getDay()];

    t.is(component.dayOfWeek(a), aday);
    t.is(component.dayOfWeek(b), bday);
});

test('DateDrills dayOfMonth', (t) => {
    let a = new Date(1514163075588);
    let b = new Date(1519133075588);
    let adom = a.getDate();
    let bdom = b.getDate();

    t.is(component.dayOfMonth(a), adom);
    t.is(component.dayOfMonth(b), bdom);
});

test('DateDrills getYear', (t) => {
    let a = new Date(1514163075588);
    let b = new Date(1519133075588);
    let ayear = a.getFullYear();
    let byear = b.getFullYear();

    t.is(component.getYear(a), ayear);
    t.is(component.getYear(b), byear);
});

test('DateDrills getMonth', (t) => {
    let a = new Date(1514163075588);
    let b = new Date(1519133075588);
    a.setMonth(0);
    b.setMonth(2);

    t.is(component.getMonth(a), 'January');
    t.is(component.getMonth(b), 'March');
});

test('DateDrills getTimeOfDay', (t) => {
    let a = new Date();
    let b = new Date();
    let c = new Date();
    a.setHours(12, 30);
    b.setHours(14, 10);
    c.setHours(24, 2);

    t.is(component.getTimeOfDay(a, true), '12:30');
    t.is(component.getTimeOfDay(b, true), '14:10');
    t.is(component.getTimeOfDay(c, true), '0:02');

    t.is(component.getTimeOfDay(a), '12:30PM');
    t.is(component.getTimeOfDay(b), '2:10PM');
    t.is(component.getTimeOfDay(c), '12:02AM');
});


