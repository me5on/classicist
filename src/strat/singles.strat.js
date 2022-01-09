import FN from '@me5on/fn';
import s from '../util/stringify.util.js';
import single from './single.strat.js';


const {ident} = FN;


const SPACE = ' ';


const singles = (

    (names, keys) => (

        s(keys)
            .trim()
            .split(SPACE)
            .filter(ident)
            .map(key => single(names, key))
            .join(SPACE)

    )

);


// noinspection JSUnusedGlobalSymbols
export default singles;
