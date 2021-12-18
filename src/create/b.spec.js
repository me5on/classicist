/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import b from './b.create.js';


describe('classicist/create/b', () => {

    it(
        'is a function',
        () => void expect(b).toBeFun(),
    );

    const SPACE = ' ';
    const cn = $ => $;
    const bad = () => null;

    it.each([
        // result, cn, root, block
        ['', null],
        ['', void (1)],
        ['', cn, null, null],
        ['', cn, '', ''],
        ['', cn, SPACE, SPACE],
        ['root', cn, 'root', ''],
        ['root', cn, 'root', SPACE],
        ['block', cn, SPACE, 'block'],
        ['', null, 'root', 'block'],
        ['', 'not a function', 'root', 'block'],
        ['', bad, 'root', 'block'],
        ['block', cn, 'root', 'block'],
    ])(
        'gets b %p from %p',
        expect(b).toMapExact,
    );

});
