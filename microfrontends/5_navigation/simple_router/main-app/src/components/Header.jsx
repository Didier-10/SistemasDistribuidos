import { AppBar, Button, GlobalStyles, Link, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { defaultTheme } from '../constants/Constants';
import { BrowserRouter as Router, Route, Link as RouterLink, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Header(){
    return(
        <Router>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none'} }} />
                <AppBar
                    position='static'
                    color='default'
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                            <Link component={RouterLink} to='/' sx={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                        </Typography>
                        <Button variant='outlined' sx={{ my: 1, mx: 1.5 }}>
                            <Link component={RouterLink} to='/login' sx={{ textDecoration: 'none' }}>Login</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}