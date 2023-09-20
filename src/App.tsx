import React from 'react';


import { Box } from '@chakra-ui/react';
import Nav from './Header/Nav';
import Main from './main/Main';
import Rectangle from './rectangles/Rectangle';

function App() {
  return (
  
     <Box>
      <Nav></Nav>
      <Main></Main>
      <Rectangle></Rectangle>
     </Box>
  
  );
}

export default App;
