import { Box, Container, List, Typography, useMediaQuery } from '@mui/material';
import ListItem, { listItemClasses } from '@mui/material/ListItem';

import correctionImg from 'img/RootPage/img/img.png';
import additionallyImg from 'img/RootPage/img/img2.png';
import NailCard from '../../../NailCard.tsx';
import {
  ADDITIONALLY_PRICE,
  NAIL_EXTENSIONS_PRICE,
  NAIL_EXTENSIONS_STRINGS,
  SERVICE_PRICE,
  SERVICE_STRINGS,
} from './constants.ts';

const styles = {
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 9,
  },
  info: {
    textAlign: 'start',
    display: 'flex',
    justifyContent: 'space-between',
    mt: 2,
  },
  infoMobile: {
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    mt: 3,
  },
  listItem: {
    [`&.${listItemClasses.root}`]: {
      paddingRight: 0,
      pl: 0,
    },
  },
};

const ServicePage = () => {

  const isDesktop = useMediaQuery('(min-width:950px)');

  return <Container
    sx={styles.container}
    maxWidth={isDesktop ? 'lg' : 'xs'}
  >
    <Box>
      {!isDesktop && <Typography variant='h2' sx={{ marginTop: '16px' }}>Услуги</Typography>}
      <Typography variant={isDesktop ? 'h2' : 'h3'} sx={isDesktop ? {marginTop: '44px', marginBottom:'48px'} : {marginTop: '30px',}}>Коррекция</Typography>
      <Box sx={isDesktop ? styles.info : styles.infoMobile}>
        <Box>
          <Box>
            <Typography variant='h4'>Что входит в услугу:</Typography>
            <List>
              {SERVICE_STRINGS.map((string) =>
                <ListItem sx={styles.listItem}>- {string}</ListItem>,
              )}
            </List>
          </Box>

          <Box>
            <Typography variant='h4'>Прайс:</Typography>
            <List>
              {SERVICE_PRICE.map(({ title, price }) => (
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>{title}</Typography>
                  <Typography>{price}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>

        </Box>
        <NailCard
          src={correctionImg}
          sx={{
            height: isDesktop ? 536 : 200,
            width: !isDesktop ? 260 : 'auto',
            margin: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>

    <Box>
      <Typography variant={isDesktop ? 'h2' : 'h3'}>Наращивание</Typography>
      <Box sx={isDesktop ? styles.info : styles.infoMobile}>
        <Box>

          <Box>
            <Typography variant='h4'>Что входит в услугу:</Typography>
            <List>
              {NAIL_EXTENSIONS_STRINGS.map((string) =>
                <ListItem sx={styles.listItem}>- {string}</ListItem>,
              )}
            </List>
          </Box>

          <Box>
            <Typography variant='h4'>Прайс:</Typography>
            <List>
              {NAIL_EXTENSIONS_PRICE.map(({ title, price }) => (
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>{title}</Typography>
                  <Typography>{price}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>

        </Box>
        <NailCard
          src={additionallyImg}
          sx={{
            borderRadius: 3,
            height: isDesktop ? 446 : 200,
            width: !isDesktop ? 260 : 'auto',
            margin: 'auto',
          }}
        />
      </Box>
    </Box>
    <Box sx={{ textAlign: 'center', mb:'80px' }}>
      <Typography variant={isDesktop ? 'h2' : 'h3'}>Дополнительно</Typography>
      <List>
        {ADDITIONALLY_PRICE.map(({ title, price }) => (
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{width:'230px'}}>{title}</Typography>
            <Typography>{price}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  </Container>;
};

export default ServicePage;