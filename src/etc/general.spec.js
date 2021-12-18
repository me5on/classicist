/* eslint-disable prefer-destructuring,  no-magic-numbers,quote-props */


import {describe, expect, it} from '@jest/globals';
import C from './general.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('classicist/strat/general', () => {


    it(
        'contains fields',
        () => {
            const fields = ['space', 'dunder', 'dodash'].sort();
            expect(sortedKeys(C)).toEqual(fields);
        },
    );

});
