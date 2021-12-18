import C from '../etc/general.const.js';
import x from '../util/execute.util.js';
import s from '../util/stringify.util.js';


const m = (

    (cn, root, modifier) => {

        root = s(root);
        modifier = s(modifier);

        return s(root && modifier && x(
            cn,
            root + C.dodash + modifier,
        ));

    }

);


export default m;
