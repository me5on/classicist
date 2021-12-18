/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import e from './e.create.js';


describe('classicist/create/e', () => {

    it(
        'is a function',
        () => void expect(e).toBeFun(),
    );

    const SPACE = ' ';
    const cn = $ => $;
    const bad = () => null;

    it.each([
        // result, cn, root, element
        ['', null],
        ['', void (1)],
        ['', cn, null, null],
        ['', cn, '', ''],
        ['', cn, SPACE, SPACE],
        ['', cn, 'root', ''],
        ['', cn, 'root', SPACE],
        ['', cn, SPACE, 'element'],
        ['', null, 'root', 'element'],
        ['', 'not a function', 'root', 'element'],
        ['', bad, 'root', 'element'],
        ['root__element', cn, 'root', 'element'],
    ])(
        'gets b %p from %p',
        expect(e).toMapExact,
    );

});
