import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Box, Container, Typography } from '@mui/material'
import SharedComponent from 'app1/SharedComponent'

const App = () => {
  const [dataFromApp2] = useState('Hello from App1');

  return(
    <Container>
      <Box textAlign='center' my={4}>
        <Typography variant='h3' gutterBottom>
          Microfrontends Communication Using Props
        </Typography>
        <SharedComponent data={dataFromApp2} />
      </Box>
    </Container>
  )
};
const root = createRoot(document.getElementById('app'));
root.render(<App />)