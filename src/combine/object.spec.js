/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import object from './object.combine.js';


describe('classicist/combine/object', () => {

    it(
        'is a function',
        () => void expect(object).toBeFun(),
    );


    it.each([
        // result, object
        ['', null],
        ['', void (1)],
        ['', ''],
        ['', $ => $],
        ['', () => null],
        ['a', {a: 1}],
        ['a b', {a: 1, b: 2}],
        ['a b', {z: 0, a: 1, b: 2}],
        ['a b', {z: 0, a: true, b: 'asdf', c: ''}],
        ['a b', {z: 0, a: false, 'a b': Symbol(''), c: null}],
    ])(
        'gets %p from %p',
        expect(object).toMapExact,
    );

});
