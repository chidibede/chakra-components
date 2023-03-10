import { Box } from '@chakra-ui/react';
import React from 'react';
import Info from './Info';
import Success from './Success';
import Warning from './Warning';
import Error from './Error';

export default function Alerts() {
  return (
    <>
      <Box>
        <Success />
      </Box>
      <Box>
        <Warning />
      </Box>
      <Box>
        <Info />
      </Box>
      <Box>
        <Error />
      </Box>
    </>
  );
}
