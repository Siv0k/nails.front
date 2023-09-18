import MuiGlobalStyles from '@mui/material/GlobalStyles';
import { lighten, Theme, useMediaQuery } from '@mui/material';

const GlobalStyles = () => {
    const isDesktop = useMediaQuery('(min-width: 950px)');

    const styles = (theme: Theme) => ({
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: isDesktop ? theme.spacing() : 0,
            height: isDesktop ? theme.spacing() : 0,
            backgroundColor: isDesktop ? lighten(theme.palette.primary.main, 0.7) : 'none',
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: isDesktop ? theme.spacing() : 0,
            backgroundColor: isDesktop ? lighten(theme.palette.primary.main, 0.2) : 'none',
            border: isDesktop ? '3px solid transparent' : 'none',
        },
        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: isDesktop ? lighten(theme.palette.primary.main, 0.3) : 'none',
        },
        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: isDesktop ? lighten(theme.palette.primary.main, 0.3) : 'none',
        },
        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: isDesktop ? lighten(theme.palette.primary.main, 0.3) : 'none',
        },
        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            background: isDesktop ? 'transparent' : 'none',
            cursor: 'pointer',
        },
    });

    return <MuiGlobalStyles styles={styles} />;
};

export default GlobalStyles;
