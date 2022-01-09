const SEPARATOR = ' ';


const transform = (

    ([k, v]) => v ? [k] : []

);


const object = (

    $ => Object
        .entries($ ?? {})
        .flatMap(transform)
        .join(SEPARATOR)

);


// noinspection JSUnusedGlobalSymbols
export default object;
