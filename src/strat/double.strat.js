import OB from '@me5on/ob';
import TO from '@me5on/to';
import C from '../etc/general.const.js';
import s from '../util/stringify.util.js';


const {string} = TO;
const {get: {ok: get}} = OB;


const double = (

    (names, key, prefix = '') => {

        key = s(prefix) + string(key);
        const val = string(get(names, key));

        return s(key + C.space + val);
    }

);


// noinspection JSUnusedGlobalSymbols
export default double;
