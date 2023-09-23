import { Box, Paper, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

export default function SharedComponent({ data }) {
    return(
        <Paper elevation={3} style={{ paddig: '20px', textAlign: 'center', backgroundColor: '#F5F5F5' }}>
            <Box>
                <ShareIcon fontSize='large' color='primary' />
                <Typography variant='h5' component='div'>
                    Shared Component
                </Typography>
            </Box>
            <Typography variant='body1' paragraph>
                <strong>Data from App1:</strong> {data}
            </Typography>
        </Paper>
    );
}