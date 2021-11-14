// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone Numbers
test('valid phone number test 1', () => {
    expect(functions.isPhoneNumber('(123)345-7890)')).toBe(true);
});

test('valid phone number test 2', () => {
    expect(functions.isPhoneNumber('(098)765-4321)')).toBe(true);
});

test('invalid phone number test 2', () => {
    expect(functions.isPhoneNumber('(32)232-423)')).toBe(false);
});

test('invalid phone number test 2', () => {
    expect(functions.isPhoneNumber('(03)2320321')).toBe(false);
});

// Emails
test('valid email test 1', () => {
    expect(functions.isEmail('randomemail1@gmail.com')).toBe(true);
});

test('valid email test 2', () => {
    expect(functions.isEmail('reandomemail2@ucsd.edu')).toBe(true);
});

test('invalid email test 2', () => {
    expect(functions.isEmail('invalidcase')).toBe(false);
});

test('invalid email test 2', () => {
    expect(functions.isEmail('another@invalidcase')).toBe(false);
});

// Password
test('valid password test 1', () => {
    expect(functions.isStrongPassword('onePassword')).toBe(true);
});

test('valid password test 2', () => {
    expect(functions.isStrongPassword('twoP455W0RD')).toBe(true);
});

test('invalid password test 2', () => {
    expect(functions.isStrongPassword('3wordup')).toBe(false);
});

test('invalid password test 2', () => {
    expect(functions.isStrongPassword('wow')).toBe(false);
});

// Date
test('valid date test 1', () => {
    expect(functions.isDate('1/1/2001')).toBe(true);
});

test('valid date test 2', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('invalid date test 2', () => {
    expect(functions.isDate('3/4')).toBe(false);
});

test('invalid date test 2', () => {
    expect(functions.isDate('2039')).toBe(false);
});

// Hexcolor
test('valid hexcolor test 1', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('valid hexcolor test 2', () => {
    expect(functions.isHexColor('#808')).toBe(true);
});

test('invalid hexcolor test 2', () => {
    expect(functions.isHexColor('#21')).toBe(false);
});

test('invalid hexcolor test 2', () => {
    expect(functions.isHexColor('#9012321')).toBe(false);
});