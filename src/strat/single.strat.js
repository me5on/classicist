import OB from '@me5on/ob';
import s from '../util/stringify.util.js';


const {get: {ok: get}} = OB;


const single = (

    (names, key, prefix = '') => s(get(names, s(prefix) + key))

);


// noinspection JSUnusedGlobalSymbols
export default single;
