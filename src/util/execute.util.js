import IS from '@me5on/is';


const {fun} = IS;


const execute = (

    ($, ...$$) => (

        fun($)
            ? $(...$$)
            : ''
        
    )

);


export default execute;
