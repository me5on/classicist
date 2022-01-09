import FN from '@me5on/fn';
import OB from '@me5on/ob';
import TO from '@me5on/to';
import C from '../etc/general.const.js';
import s from '../util/stringify.util.js';


const {ident} = FN;
const {string} = TO;
const {get: {ok: get}} = OB;


const SPACE = ' ';


const double = (

    (names, prefix, key) => {


        key = prefix + string(key);
        const val = string(get(names, key));

        return s(key + C.space + val);
    }

);


const doubles = (

    (names, keys, prefix = '') => {

        prefix = s(prefix);

        return (

            s(keys)
                .split(SPACE)
                .filter(ident)
                .map(key => double(names, prefix, key))
                .join(SPACE)
                .trim()

        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default doubles;
