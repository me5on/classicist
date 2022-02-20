const {isArray} = Array;


const SEPARATOR = ' ';


const transform = (

    $ => {
        const value = String($ ?? '').trim();
        return value ? [value] : [];
    }

);


const array = (

    $ => (isArray($) ? $ : [])
        .flatMap(transform)
        .join(SEPARATOR)
        .trim()

);


// noinspection JSUnusedGlobalSymbols
export default array;
