/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import singles from './singles.strat.js';


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


describe('classicist/strat/singles', () => {

    it(
        'is a function',
        () => void expect(singles).toBeFun(),
    );

    it.each([
        [''],
        ['', null],
        ['', {}],
        ['', {}, null],
        ['', {}, ''],
        ['', '', ''],
        ['', {a: 'sdf'}, 'x'],
        ['1', {a: '1'}, 'a'],
        ['1', {a: 1}, 'a'],
        ['31 23 13 32', CN, 'a__b--c b--a c a__c--b'],
        ['23 22', CN, '  b--a   a--b  '],
        ['32 31', CN, 'c c--b b--c', 'a__'],
    ])(
        'gets singles %p from %p',
        expect(singles).toMapExact,
    );

});
