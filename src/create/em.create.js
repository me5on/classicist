// noinspection DuplicatedCode


import C from '../etc/general.const.js';
import x from '../util/execute.util.js';
import s from '../util/stringify.util.js';


const em = (

    (cn, root, element, modifier) => {

        root = s(root);
        element = s(element);
        modifier = s(modifier);

        return s(root && element && modifier && x(
            cn,
            root + C.dunder + element + C.dodash + modifier,
        ));
    }

);


export default em;
