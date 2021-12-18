import FN from '@me5on/fn';
import OB from '@me5on/ob';
import b from './create/b.create.js';
import e from './create/e.create.js';
import em from './create/em.create.js';
import m from './create/m.create.js';
import me from './create/me.create.js';
import double from './strat/double.strat.js';
import single from './strat/single.strat.js';
import s from './util/stringify.util.js';


const {tie, named$} = FN;
const {inf: {keys}} = OB;


const classicist = (

    options => {

        const root = s(options?.root);
        const strat = s(options?.strat) || 'double';
        const names = options?.names ?? {};

        let cn;

        cn = (
            'double' === strat
                ? double
                : single
        );

        cn = named$(
            `${cn.name}({${keys(names)}})`,
            tie(cn, names),
        );


        return Object.assign(
            cn,
            {
                b:  tie(b, cn, root),
                e:  tie(e, cn, root),
                m:  tie(m, cn, root),
                em: tie(em, cn, root),
                me: tie(me, cn, root),
            },
        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default classicist;
