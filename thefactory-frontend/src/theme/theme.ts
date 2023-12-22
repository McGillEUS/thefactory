import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#61c299',
        },
        error: {
            main: '#980808',
        },
        warning: {
            main: '#d06701',
        },
        success: {
            main: '#61c299',
        },
        info: {
            main: '#007dbd',
        },
    },
    typography: {
        fontFamily: 'Lato',
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
        h3: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
        h5: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
        h6: {
            fontFamily: 'Montserrat',
            fontWeight: 1000,
        },
    },
});

export default theme;
