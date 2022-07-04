import React from 'react';

import {
    Accordion,


} from '@chakra-ui/react'
const CustomAccordion = ({ allowMultiple, allowToggle, defaultIndex, children }) => {
    console.log(defaultIndex);
    return (
        <Accordion border='1px' borderColor={'#EBEBEB'} defaultIndex={[defaultIndex]} allowMultiple={allowMultiple ? true : false} allowToggle={allowToggle ? true : false} >
            {children && children.map(child => child)}
        </Accordion>
    );
};

export default CustomAccordion;