import x from '../util/execute.util.js';
import s from '../util/stringify.util.js';


const b = (

    (cn, root, block) => (

        s(x(
            cn,
            s(block) || s(root)
        ))

    )

);


export default b;
