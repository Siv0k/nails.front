import { Box, IconButton, Theme, Typography, useMediaQuery } from '@mui/material';

import Logo from "icons/Logo";
import {COPYRIGHT, SOCIAL_LINKS} from "config/constants";
import BlumssoftLogo from "icons/BlumssoftLogo";

const styles = {
    logo: (theme: Theme) => ({
        width: theme.spacing(5),
        height: theme.spacing(5),
    }),
    mobileLogo: (theme: Theme) => ({
        width: theme.spacing(4),
        height: theme.spacing(4),
    }),
    container: (theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
        height: theme.spacing(25.5),
        padding: theme.spacing(8, 10),
        color: 'primary.contrastText',
        minWidth: 330,
        width: '100%',
    }),
    mobileContainer: (theme: Theme) => ({
        padding: theme.spacing(6, 2),
        height: theme.spacing(10),
    }),
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
    },
    logoContainer: {
        display: 'flex',
        gap: 2,
    },
    copyright: (theme: Theme) => ({
        fontWeight: 300,
        fontSize: '18px',
        color: 'secondary.main',
    }),
    mobileCopyright: (theme: Theme) => ({
        fontWeight: '300',
        fontSize: '16px',
        color: 'background.default',
    }),
};

const Footer = () => {

    const isDesktop = useMediaQuery('(min-width:950px)');

    return <Box sx={[styles.container, !isDesktop && styles.mobileContainer]}>
        <Box sx={styles.infoContainer}>
            <Box sx={styles.logoContainer}>
                <Logo sx={[styles.logo, !isDesktop && styles.mobileLogo]}/>
                <BlumssoftLogo sx={[styles.logo, !isDesktop && styles.mobileLogo]}/>
            </Box>
            <Typography sx={[styles.copyright, !isDesktop && styles.mobileCopyright]}>{COPYRIGHT}</Typography>
        </Box>
        <Box>
            {SOCIAL_LINKS.map(({link, Icon}) => (
                <IconButton color="inherit" key={link}>
                    <Icon/>
                </IconButton>
            ))}
        </Box>
    </Box>;
};

export default Footer;