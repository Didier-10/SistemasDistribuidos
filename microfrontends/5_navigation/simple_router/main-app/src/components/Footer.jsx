import { CssBaseline, Link, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../constants/Constants';

export default function Footer(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 8, mb: 4}}>
                {'Copyright © '}
                <Link color='inherit' href='#'>
                    My Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </ThemeProvider>
    );
}