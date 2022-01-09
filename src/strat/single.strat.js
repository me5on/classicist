import OB from '@me5on/ob';
import TO from '@me5on/to';


const {string} = TO;
const {get: {ok: get}} = OB;


const single = (

    (names, key) => string(get(names, key)).trim()

);


// noinspection JSUnusedGlobalSymbols
export default single;
