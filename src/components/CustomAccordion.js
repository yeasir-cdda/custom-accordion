import React from 'react';
import { RiArrowDownSLine, } from "react-icons/ri";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,

} from '@chakra-ui/react'
const CustomAccordion = ({ allowMultiple, allowToggle }) => {
    return (
        <Accordion border='1px' borderColor={'#EBEBEB'} defaultIndex={[0]} allowMultiple={allowMultiple ? true : false} allowToggle={allowToggle ? true : false} >
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#F7F7F7', borderLeft: '3px solid', color: '#23A6F0' }} >
                                <Box ml='28px' py='22px' fontSize={'16px'} fontWeight='700' fontFamily='montserrat' flex='1' textAlign='left'>
                                    Section 1 title
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#F7F7F7', borderLeft: '3px solid', color: '#23A6F0' }} >
                                <Box ml='28px' py='22px' fontSize={'16px'} fontWeight='700' fontFamily='montserrat' flex='1' textAlign='left'>
                                    Section 2 title
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>


        </Accordion>
    );
};

export default CustomAccordion;