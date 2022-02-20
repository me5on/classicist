/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import double from './strat/double.strat.js';
import doubles from './strat/doubles.strat.js';
import single from './strat/single.strat.js';
import singles from './strat/singles.strat.js';
import classicist from './index.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


// eslint-disable-next-line max-lines-per-function
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
        [{root: 'a'}],
        [{strat: '', root: 'a'}],
        [{strat: 'single', root: 'a'}],
        [{strat: 'double', root: 'a'}],
        [{strat: 'singles', root: 'a'}],
        [{strat: 'doubles', root: 'a'}],
    ])(
        'returns a function with keys %p for %p',
        $ => expect(
            sortedKeys(classicist($)),
        ).toEqual(
            ['a', 'o', 'b', 'e', 'm', 'em', 'me'].sort(),
        ),
    );

    it.each([
        [`${double}`, {root: 'a'}],
        [`${double}`, {strat: '', root: 'a'}],
        [`${double}`, {strat: Symbol('another bad'), root: 'a'}],
        [`${double}`, {strat: 'bad', root: 'a'}],
        [`${single}`, {strat: 'single', root: 'a'}],
        [`${double}`, {strat: 'double', root: 'a'}],
        [`${singles}`, {strat: 'singles', root: 'a'}],
        [`${doubles}`, {strat: 'doubles', root: 'a'}],
    ])(
        'picks the correct strat %p for %p',
        expect((...$$) => `${classicist(...$$)}`).toMapExact,
    );


    it(
        'returns correct results when prop functions are called',
        () => {

            const names = Object.freeze({
                'a':       11, 'b': 12, 'c': 13,
                'a__b':    21, 'a--b': 22, 'b--a': 23,
                'a__b--c': 31, 'a__c--b': 32,
            });

            const s = classicist({names, root: 'a', strat: 'single'});
            const d = classicist({names, root: 'a'});

            expect(s.b()).toBe('11');
            expect(d.b()).toBe('a 11');
            expect(s.e('b')).toBe('21');
            expect(d.e('b')).toBe('a__b 21');
            expect(s.m('b')).toBe('22');
            expect(d.m('b')).toBe('a--b 22');
            expect(s.em('b', 'c')).toBe('31');
            expect(d.em('b', 'c')).toBe('a__b--c 31');
            expect(s.me('c', 'b')).toBe('31');
            expect(d.me('c', 'b')).toBe('a__b--c 31');

        },
    );


});
