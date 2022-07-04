import { AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const CustomAccordionItem = ({title, bodyText}) => {
    return (
        <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#F7F7F7', borderLeft: '3px solid', color: '#23A6F0' }} >
                                <Box ml='28px' py='22px' fontSize={'16px'} fontWeight='700' fontFamily='montserrat' flex='1' textAlign='left'>
                                   {title}
                                </Box>
                                {isExpanded ? <Box bg='#23A6F0' color={'white'} borderRadius={'30px'} boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)' w='32px' h='32px' position={'relative'} mr='28px'>
                                    <Box fontSize={'20px'} transform='rotate(-180deg)' transition={'ease-in-out .25s'} position='absolute' top={'6px'} left={'6px'}>
                                        <RiArrowDownSLine />
                                    </Box> </Box> : <Box border={'1px'} borderColor='#D3D3D3' borderRadius={'30px'} boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)' w='32px' h='32px' position={'relative'} mr='28px'>
                                    <Box fontSize={'20px'} transform='rotate(-90deg)' color={'black'} transition={'ease-in-out .25s'} position='absolute' top={'5px'} left={'5px'}>
                                        <RiArrowDownSLine />
                                    </Box>
                                </Box>}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel backgroundColor={'#F7F7F7'} fontSize={'16px'} fontFamily='montserrat' fontWeight={'500'} px='38px' pb={4}>
                           {bodyText}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            
    );
};

export default CustomAccordionItem;