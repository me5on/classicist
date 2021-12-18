/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import em from './em.create.js';


describe('classicist/create/em', () => {

    it(
        'is a function',
        () => void expect(em).toBeFun(),
    );

    const SPACE = ' ';
    const cn = $ => $;
    const bad = () => null;

    it.each([
        // result, cn, root, element, modifier
        ['', null],
        ['', void (1)],
        ['', cn, null, null],
        ['', cn, '', ''],
        ['', cn, SPACE, SPACE],
        ['', cn, SPACE, SPACE, SPACE],
        ['', cn, 'root'],
        ['', cn, 'root', SPACE],
        ['', cn, 'root', 'element', null],
        ['', cn, 'root', 'element', ''],
        ['', cn, 'root', 'element', SPACE],
        ['', cn, 'root', null, 'modifier'],
        ['', cn, 'root', '', 'modifier'],
        ['', cn, 'root', SPACE, 'modifier'],
        ['', cn, null, 'element', 'modifier'],
        ['', cn, '', 'element', 'modifier'],
        ['', cn, SPACE, 'element', 'modifier'],
        ['', null, 'root', 'element', 'modifier'],
        ['', 'not a function', 'root', 'element', 'modifier'],
        ['', bad, 'root', 'element', 'modifier'],
        ['root__element--modifier', cn, 'root', 'element', 'modifier'],
    ])(
        'gets b %p from %p',
        expect(em).toMapExact,
    );

});
