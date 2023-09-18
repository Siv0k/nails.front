import MuiGlobalStyles from '@mui/material/GlobalStyles';
import { lighten, Theme } from '@mui/material';

const styles = (theme: Theme) => ({
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: theme.spacing(),
        height: theme.spacing(),
        backgroundColor: lighten(theme.palette.primary.main, 0.7),
    },
    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(),
        backgroundColor: lighten(theme.palette.primary.main, 0.2),
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: lighten(theme.palette.primary.main, 0.3),
    },
    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
        backgroundColor: lighten(theme.palette.primary.main, 0.3),
    },
    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
        backgroundColor: lighten(theme.palette.primary.main, 0.3),
    },
    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
        background: 'transparent',
        cursor: 'pointer',
    },
});

const GlobalStyles = () => <MuiGlobalStyles styles={styles} />;

export default GlobalStyles;