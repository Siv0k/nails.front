import Typography from '@mui/material/Typography';
/*import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';*/
import { alpha, Box, styled, Theme, useMediaQuery } from '@mui/material';

import Map from 'components/Map';
import { NAIL_CONTACT_INFO } from 'config/constants';
import Link from '@mui/material/Link';

const styles = {
  /*stack: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    pb: 6,
    minWidth: 330,
  },*/
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: (theme: Theme) => theme.spacing(4),
    color: (theme: Theme) => theme.palette.text.primary,
  },
};

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(),
  color: theme.palette.text.primary,
}));*/

const ContactsPage = () => {
  const isDekstop = useMediaQuery('(min-width:950px)');

  return <Box>
    {/*<Stack
      sx={styles.stack}
      paddingLeft={isDekstop ? 10 : 5}
      paddingRight={isDekstop ? 10 : 5}
      spacing={2}
    >
      <Item>
        <Typography variant='h5' sx={styles.title}>Время работы</Typography>
        <Typography variant='h5'>{NAIL_CONTACT_INFO.WORK_TIME.START} - {NAIL_CONTACT_INFO.WORK_TIME.END}</Typography>
      </Item>
      <Item>
        <Typography variant='h5' sx={styles.title}>Телефон</Typography>
        <Link
          href={`tel:+${NAIL_CONTACT_INFO.PHONE.replace(/\W/g, '')}`}
          underline='none'
          variant='h5'
          color='inherit'
        >{NAIL_CONTACT_INFO.PHONE}</Link>
      </Item>
      <Item>
        <Typography variant='h5' sx={styles.title}>E-mail</Typography>
        <Link
          href={`mailto:${NAIL_CONTACT_INFO.EMAIL}`}
          variant='h5'
          underline='none'
          color='inherit'
        >{NAIL_CONTACT_INFO.EMAIL}</Link>
      </Item>
      <Item>
        <Typography variant='h5' sx={styles.title}>Адрес</Typography>
        <Typography variant='h5'>{NAIL_CONTACT_INFO.ADDRESS}</Typography>
      </Item>
    </Stack>*/}
    {!isDekstop &&
      <Typography variant='h4' sx={styles.title}>Контакты</Typography>
    }
    <Map />
  </Box>;
};

export default ContactsPage;