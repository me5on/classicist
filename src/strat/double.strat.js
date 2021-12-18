import OB from '@me5on/ob';
import TO from '@me5on/to';
import C from '../etc/general.const.js';


const {string} = TO;
const {get: {ok: get}} = OB;


const double = (

    (names, key) => {
        
        key = string(key);
        const val = string(get(names, key));

        return (key + C.space + val).trim();
    }

);


export default double;
