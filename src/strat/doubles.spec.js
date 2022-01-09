/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import doubles from './doubles.strat.js';


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


describe('classicist/strat/doubles', () => {

    it(
        'is a function',
        () => void expect(doubles).toBeFun(),
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
        ['a__b--c 31 b--a 23 c 13 a__c--b 32', CN, 'a__b--c b--a c a__c--b'],
        ['b--a 23 a--b 22', CN, '  b--a   a--b  '],
    ])(
        'gets doubles %p from %p',
        expect(doubles).toMapExact,
    );

});
