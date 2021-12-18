/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import double from './double.strat.js';


const CN = Object.freeze({
    'a':       11,
    'b':       12,
    'c':       13,
    'a__b':    21,
    'a--b':    22,
    'b--a':    23,
    'a__b--c': 31,
    'a__c--b': 32,
});


describe('classicist/strat/double', () => {

    it(
        'is a function',
        () => void expect(double).toBeFun(),
    );

    it.each([
        [''],
        ['', null],
        ['', {}],
        ['', {}, null],
        ['', {}, ''],
        ['', '', ''],
        ['x', {a: 'sdf'}, 'x'],
        ['a 1', {a: '1'}, 'a'],
        ['a 1', {a: 1}, 'a'],
        ['a__b--c 31', CN, 'a__b--c'],
    ])(
        'gets double %p from %p',
        expect(double).toMapExact,
    );

});
