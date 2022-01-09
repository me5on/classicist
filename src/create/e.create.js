import C from '../etc/general.const.js';
import x from '../util/execute.util.js';
import s from '../util/stringify.util.js';


const e = (

    (cn, root, element) => {

        root = s(root);
        element = s(element);

        return s(root && element && x(
            cn,
            element,
            root + C.dunder,
        ));
    }

);


export default e;
