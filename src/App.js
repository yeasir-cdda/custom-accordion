import { Box } from "@chakra-ui/react";
import CustomAccordion from "./components/CustomAccordion";
import './font.css'
function App() {
  return (
    <div className="App">
      <Box w={'820px'} mx='auto' mt='20'>
      <CustomAccordion  allowMultiple allowToggle/>
      </Box>
    </div>
  );
}
export default App;
