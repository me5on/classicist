/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import m from './m.create.js';


describe('classicist/create/m', () => {

    it(
        'is a function',
        () => void expect(m).toBeFun(),
    );

    const SPACE = ' ';
    const cn = $ => $;
    const bad = () => null;

    it.each([
        // result, cn, root, modifier
        ['', null],
        ['', void (1)],
        ['', cn, null, null],
        ['', cn, '', ''],
        ['', cn, SPACE, SPACE],
        ['', cn, 'root', ''],
        ['', cn, 'root', SPACE],
        ['', cn, SPACE, 'modifier'],
        ['', null, 'root', 'modifier'],
        ['', 'not a function', 'root', 'modifier'],
        ['', bad, 'root', 'modifier'],
        ['root--modifier', cn, 'root', 'modifier'],
    ])(
        'gets b %p from %p',
        expect(m).toMapExact,
    );

});
