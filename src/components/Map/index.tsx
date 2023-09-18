import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import theme from '../../config/theme';
import { NAIL_CONTACT_INFO } from '../../config/constants';
import Link from '@mui/material/Link';

const defaultState = {
  center: [55.53336989, 28.64855526],
  zoom: 18,
};

const styles = {
  map: {
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(6.25),
    width: theme.spacing(50),
    height: theme.spacing(39.375),
    backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    zIndex: theme.zIndex.appBar,
  },
  mapMobile: {
    backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    width: '100%',
  },
};

const Map = () => {
  const isDesktop = useMediaQuery('(min-width: 950px)');

  return <Box sx={{ position: 'relative' }}>

    <Box sx={isDesktop ? styles.map : styles.mapMobile}>
      <Box sx={{ padding: theme.spacing(3.75) }}>
        <Typography sx={{ fontWeight: '400', fontSize: theme.spacing(3.25) }}>Контакты </Typography>
        <Typography sx={{ fontWeight: '400', fontSize: theme.spacing(2.5) }}>Наш адресс:</Typography>
        <Typography>{NAIL_CONTACT_INFO.ADDRESS}</Typography>
        <Typography sx={{ fontWeight: '400', fontSize: theme.spacing(2.5) }}>Режим работы:</Typography>
        <Typography>{NAIL_CONTACT_INFO.WORK_TIME.START} - {NAIL_CONTACT_INFO.WORK_TIME.END}</Typography>
        <Typography sx={{ fontWeight: '400', fontSize: theme.spacing(2.5) }}>Наш телефон:</Typography>
        <Link
          href={`tel:+${NAIL_CONTACT_INFO.PHONE.replace(/\W/g, '')}`}
          underline='none'
          color='inherit'
        >{NAIL_CONTACT_INFO.PHONE}</Link>
        <Typography sx={{ fontWeight: '400', fontSize: theme.spacing(2.5) }}>E-mail:</Typography>
        <Link
          href={`mailto:${NAIL_CONTACT_INFO.EMAIL}`}
          underline='none'
          color='inherit'
        >{NAIL_CONTACT_INFO.EMAIL}</Link>
      </Box>
    </Box>

    <YMaps>
      <YMap
        width='100%'
        defaultState={defaultState}
        style={{
          minWidth: 330,
          maxWidth: 1920,
          height: 433,
        }}
      >
        <Placemark geometry={[55.533389, 28.648748]} />
      </YMap>
    </YMaps>
  </Box>;
};

export default Map;
