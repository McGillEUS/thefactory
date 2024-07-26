import React from 'react'
import ReactDOM from 'react-dom/client'
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import theme from "./theme/theme.ts";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
)
