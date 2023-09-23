import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CustomEventMsg from 'custom_event_app/CustomEventMsg';
import { Box, Container, Paper, Typography } from '@mui/material';

const App = () => {
  const [msgFromCustomEventApp, setMsgFromCustomEventApp] = useState('');

  function eventListener(event) {
    if (event.detail && event.detail.message) {
      setMsgFromCustomEventApp(event.detail.message);
    }
  }

  useEffect(() => {
    window.addEventListener('CustomEventMsg', eventListener);

    return() => {
      window.removeEventListener('CustomEventMsg', eventListener);
    };
  }, []);

  return(
    <Container>
      <Typography variant='h3' textAlign='center' my={4} gutterBottom>
            Microfrontends communication custom events
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F5'}}>
        <Box>
          <Typography variant='body1' paragraph>
            <strong>Event app message:</strong> {msgFromCustomEventApp}
          </Typography>
          <CustomEventMsg />
        </Box>
      </Paper>
    </Container>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);