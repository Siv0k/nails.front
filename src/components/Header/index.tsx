 import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Theme, useMediaQuery, IconButton, Menu, MenuItem, Backdrop } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import NavigationMenu from 'components/NavigationMenu';
import Logo from 'icons/Logo';
import { ROOT_ROUTER, ROUTES, TITLE } from 'config/constants';
import { SOCIAL_LINKS } from 'config/constants';
import React from 'react';

 interface Props {
   isMenuOpen: boolean;
   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
 }

const styles = {
  logo: (theme: Theme) => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
  }),
  logoMobile: (theme: Theme) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: theme.spacing(2, 2),
  }),
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: (theme: Theme) => theme.spacing(3, 10),
  },
  iconButtonMobile: {
    float: 'right',
    margin: (theme: Theme) => theme.spacing(1, 1),
  },
  menuIconMobile: {
    color: (theme: Theme) => theme.palette.primary.main,
  },
  menu: {
    '& .MuiMenu-paper': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      marginTop: (theme: Theme) => theme.spacing(5),
    },
    '& .MuiMenuItem-root': {
      color: (theme: Theme) => theme.palette.common.white,
      borderBottom: (theme: Theme) => `1px solid ${theme.palette.common.white}`,
      paddingLeft: (theme: Theme) => theme.spacing(10),
      paddingRight: (theme: Theme) => theme.spacing(0),
      display: 'flex',
      alignItems: 'right',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }
  },
  icons: {
    color:'#fff',
    marginTop: '80px',
    float:'right'
  }
};

const Header = ({isMenuOpen, setIsMenuOpen}: Props) => {

  const isDesktop = useMediaQuery('(min-width:950px)');

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Box>
      {isDesktop ? (
        <Box sx={styles.container}>
          <Link
            href={ROOT_ROUTER}
            underline='none'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              fontSize: 24,
              color: 'text.primary',
            }}
          >
            <Logo sx={styles.logo} />
            {TITLE}
          </Link>
          <NavigationMenu />
          <Box />
        </Box>
      ) : (
        <Box sx={{ width: '100%', position: 'absolute' }}>
          <Logo sx={styles.logoMobile} />
          <IconButton sx={styles.iconButtonMobile} onClick={handleMenuClick}>
            {isMenuOpen ? <CloseIcon fontSize="large" sx={styles.menuIconMobile} />
              : <MenuIcon fontSize="large" sx={styles.menuIconMobile} />}
          </IconButton>
          <Backdrop onClick={handleMenuClick} open={isMenuOpen} sx={{ zIndex: 1 }} />
          <Menu
            open={isMenuOpen}
            onClose={handleMenuClick}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={styles.menu}
          >
            <MenuItem onClick={handleMenuClick} component='a' href={ROOT_ROUTER}>
              Главная
            </MenuItem>
            {Object.values(ROUTES).map(({ url, label}) => (
              <MenuItem
                key={url}
                onClick={handleMenuClick}
                component={Link}
                href={url}
              >
                {label}
              </MenuItem>
              ))}
            {SOCIAL_LINKS.map(({ link, Icon }) => (
              <IconButton key={link} sx={styles.icons}>
                <Icon />
              </IconButton>
            ))}
          </Menu>
        </Box>
      )
      }
    </Box>
  );
};

export default Header;
