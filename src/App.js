import { Box } from "@chakra-ui/react";
import CustomAccordion from "./components/CustomAccordion/CustomAccordion";
import CustomAccordionItem from "./components/CustomAccordion/CustomAccordionItem";
import './font.css'
function App() {
  return (
    <div className="App">
      <Box w={'820px'} mx='auto' mt='20'>
        <CustomAccordion  defaultIndex={1} >
          <CustomAccordionItem title={'this is title'} bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
          <CustomAccordionItem title={'this is title 2'} bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
          <CustomAccordionItem title={'this is title 3'} bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        </CustomAccordion>
      </Box>
    </div>
  );
}
export default App;
