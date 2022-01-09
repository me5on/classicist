import FN from '@me5on/fn';
import OB from '@me5on/ob';
import s from '../util/stringify.util.js';


const {get: {ok: get}} = OB;
const {ident} = FN;


const SPACE = ' ';


const single = (names, prefix, key) => s(get(names, prefix + key));


const singles = (

    (names, keys, prefix = '') => {

        prefix = s(prefix);

        return (

            s(keys)
                .split(SPACE)
                .filter(ident)
                .map(key => single(names, prefix, key))
                .join(SPACE)
                .trim()

        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default singles;
