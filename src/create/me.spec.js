/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import me from './me.create.js';


describe('classicist/create/me', () => {

    it(
        'is a function',
        () => void expect(me).toBeFun(),
    );

    const SPACE = ' ';
    const cn = (key, prefix) => prefix + key;
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
        ['', cn, 'root', 'modifier', null],
        ['', cn, 'root', 'modifier', ''],
        ['', cn, 'root', 'modifier', SPACE],
        ['', cn, 'root', null, 'element'],
        ['', cn, 'root', '', 'element'],
        ['', cn, 'root', SPACE, 'element'],
        ['', cn, null, 'modifier', 'element'],
        ['', cn, '', 'modifier', 'element'],
        ['', cn, SPACE, 'modifier', 'element'],
        ['', null, 'root', 'modifier', 'element'],
        ['', 'not a function', 'root', 'modifier', 'element'],
        ['', bad, 'root', 'modifier', 'element'],
        ['root__element--modifier', cn, 'root', 'modifier', 'element'],
    ])(
        'gets b %p from %p',
        expect(me).toMapExact,
    );

});
