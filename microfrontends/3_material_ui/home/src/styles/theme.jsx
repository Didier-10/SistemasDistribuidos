import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#01587C'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        h6: {
            fontSize: '1.5rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1rem'
        }
    },
    customStyles: {
        paper: {
            padding: 2,
            border: '1px solid #0198AA',
            height: '100%'
        }
    }
});

export default theme;