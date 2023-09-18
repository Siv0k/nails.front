import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FFEDEA',
        },
        primary: {
            main: '#AC1E4A',
        },
        secondary: {
            main: '#DBBBB8B2',
        },
    },
    typography: {
        fontFamily: '"Manrope", sans-serif',
        h1: {
            fontSize: '72px',
            fontWeight: 400,
            lineHeight: '98.35px',
        },
        h2: {
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: '54.64px',
        },
        h3: {
            fontSize: '30px',
            fontWeight: 500,
            lineHeight: '40.98px',
        },
        h4: {
            fontSize: '28px',
            fontWeight: 300,
            lineHeight: '38.25px',
        },
        h5: {
            fontSize: '20px',
            fontWeight: 200,
            lineHeight: '27.32px',
        },
    },
});

export default theme;