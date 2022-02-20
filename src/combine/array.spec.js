/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import array from './array.combine.js';


describe('classicist/combine/array', () => {

    it(
        'is a function',
        () => void expect(array).toBeFun(),
    );


    it.each([
        // result, array
        ['', null],
        ['', void (1)],
        ['', ''],
        ['', $ => $],
        ['', () => null],
        ['', []],
        ['a', ['a']],
        ['a b', ['a', null, 'b', void (1)]],
        ['a b true false', ['a', 'b', true, false]],
    ])(
        'gets %p from %p',
        expect(array).toMapExact,
    );

});
