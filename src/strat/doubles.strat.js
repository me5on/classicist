import FN from '@me5on/fn';
import s from '../util/stringify.util.js';
import double from './double.strat.js';


const {ident} = FN;


const SPACE = ' ';


const doubles = (

    (names, keys) => (

        s(keys)
            .trim()
            .split(SPACE)
            .filter(ident)
            .map(key => double(names, key))
            .join(SPACE)

    )

);


// noinspection JSUnusedGlobalSymbols
export default doubles;
