/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import classicist from './index.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('classicist/index', () => {


    it(
        'is a function',
        () => void expect(classicist).toBeFun(),
    );


    it.each([
        [void (1)],
        [null],
        [{}],
        ['options'],
    ])(
        'returns a function %p for %p',
        $ => void expect(classicist($)).toBeFun(),
    );


    it.each([
        ['double({})'],
        ['double({})', void (1)],
        ['double({})', null],
        ['double({})', {}],
        ['single({a,b})', {strat: 'single', root: 'a', names: {a: 1, b: 2}}],
        ['double({a,b})', {strat: 'double', root: 'a', names: {a: 1, b: 2}}],
    ])(
        'returns a function with name %p for %p',
        expect($ => classicist($).name).toMapExact,
    );


    it.each([
        [void (1)],
        [null],
        [{}],
        [{strat: 'single', root: 'a'}],
        [{strat: 'double', root: 'a'}],
    ])(
        'returns a function with keys %p for %p',
        $ => expect(
            sortedKeys(classicist($)),
        ).toEqual(
            ['b', 'e', 'm', 'em', 'me'].sort(),
        ),
    );


    it(
        'returns correct results when prop functions are called',
        () => {

            const names = Object.freeze({
                'a':       11, 'b': 12, 'c': 13,
                'a__b':    21, 'a--b': 22, 'b--a': 23,
                'a__b--c': 31, 'a__c--b': 32,
            });


            const single = classicist({names, root: 'a', strat: 'single'});
            const double = classicist({names, root: 'a'});

            expect(single.b()).toBe('11');
            expect(double.b()).toBe('a 11');
            expect(single.e('b')).toBe('21');
            expect(double.e('b')).toBe('a__b 21');
            expect(single.m('b')).toBe('22');
            expect(double.m('b')).toBe('a--b 22');
            expect(single.em('b', 'c')).toBe('31');
            expect(double.em('b', 'c')).toBe('a__b--c 31');
            expect(single.me('c', 'b')).toBe('31');
            expect(double.me('c', 'b')).toBe('a__b--c 31');

        },
    );


});
