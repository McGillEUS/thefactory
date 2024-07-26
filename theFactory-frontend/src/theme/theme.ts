import {createTheme, responsiveFontSizes} from "@mui/material";

export let theme = createTheme({
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
            fontWeight: "400",
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        h2: {
            fontWeight: "400",
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        h3: {
            fontWeight: "400",
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        h4: {
            fontWeight: "400",
            textAlign: 'left',
            textTransform: 'uppercase',
        },
        h5: {
            fontWeight: "700",
            textAlign: 'left',
            textTransform: 'uppercase',
        },
        h6: {
            fontWeight: "700",
            textAlign: 'center',
            textTransform: 'uppercase',
        }
    },
    components: {
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    variant: 'outlined',
                    borderRadius: '0.125rem',
                },
            },
        },
        MuiAccordion: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: '0.125rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    "&:first-of-type": {
                        borderRadius: '0.125rem',
                    },
                    "&:last-of-type": {
                        borderRadius: '0.125rem',
                    },
                    "&:before": {
                        display: 'none',
                    },
                    "&.Mui-expanded:first-of-type": {
                        marginTop: '1rem',
                    },
                    "&.Mui-expanded:last-of-type": {
                        marginBottom: '1rem',
                    },

                },

            },
        },

        MuiAccordionSummary: {
            styleOverrides: {
                content: {
                    margin: 0,
                },
            },
        },

        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '0.125rem',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.125rem',
                    height: '3.5rem',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '0.125rem',
                    height: '3.5rem',

                },
                multiline: {
                    height: 'auto',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme, {factor: 7.5})

export default theme;
