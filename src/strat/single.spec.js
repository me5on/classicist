/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import single from './single.strat.js';


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


describe('classicist/strat/single', () => {

    it(
        'is a function',
        () => void expect(single).toBeFun(),
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
        ['31', CN, 'a__b--c'],
    ])(
        'gets single %p from %p',
        expect(single).toMapExact,
    );

});
