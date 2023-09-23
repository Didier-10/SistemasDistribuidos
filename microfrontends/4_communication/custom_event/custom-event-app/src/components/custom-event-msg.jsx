import React from 'react';
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

export default function CustomEventMsg() {
    const handleClick = () => {
        const customEvent = new CustomEvent('CustomEventMsg', {
            detail: { message: 'Hello from custom-event-app' }
        });
        window.dispatchEvent(customEvent);
    };
    
    return(
        <Box>
            <Button 
                variant='contained'
                color='success'
                onClick={handleClick}
                startIcon={<ShareIcon fontSize='large' />}
            >
                Share event
            </Button>
        </Box>
    );
}