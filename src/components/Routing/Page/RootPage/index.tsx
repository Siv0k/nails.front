import {Box, Container, Theme, Typography, useMediaQuery} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {useHistory} from 'react-router-dom';

import {ROUTES, TITLE} from '../../../../config/constants.ts';
import SubscribeButton from '../../../SubscribeButton.tsx';
import NailCard from '../../../NailCard.tsx';
import Map from '../../../Map';

import img from '../../../../img/RootPage/img/img.png';
import img2 from '../../../../img/RootPage/img/img2.png';
import img3 from '../../../../img/RootPage/img/img3.png';
import img4 from '../../../../img/RootPage/img/img4.png';
import img5 from '../../../../img/RootPage/img/img5.png';
import img6 from '../../../../img/RootPage/img/img6.png';
import img7 from '../../../../img/RootPage/img/img7.png';
import cardBackground from '../../../../img/CardBackground.svg';

interface Props {
    isMenuOpen: boolean;
}

const styles = {
    welcomeBlock: (theme: Theme) => ({
        maxHeight: theme.spacing(100),
        display: 'flex',
        alignItems: 'center',
        gap: 3,
    }),
    welcomeBlockMobile: {
        flexDirection: 'column',
        height: '313px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerMobile: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: '40px',
        height: (theme: Theme) => theme.spacing(75),
    },
    // titleMobile: {
    //     fontWeight: '400',
    //     lineHeight: '49.18px',
    //     fontSize: '36px',
    // },
    typographyMobile: (theme: Theme) => ({
        mb: theme.spacing(5),
        mt: theme.spacing(4),
        fontWeight: '200',
    }),
    welcomeBlock__info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        marginTop: (theme: Theme) => theme.spacing(12),
        width: (theme: Theme) => theme.spacing(68),
        height: (theme: Theme) => theme.spacing(48.5),
    },
    welcomeBlockMobile__info: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: (theme: Theme) => theme.spacing(17),
    },
    welcomeBlock__image: (theme: Theme) => ({
        maxWidth: theme.spacing(54),
        width: '100%',
        maxHeight: theme.spacing(50),
    }),
    showingBlock: {
        position: 'relative',
    },
    showingBlock__fronLayer: (theme: Theme) => ({
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: theme.spacing(5, 7.5),
        color: 'common.white',
    }),
    showingBlockMobile__fronLayer: (theme: Theme) => ({
        padding: theme.spacing(2, 2),
    }),
    galleryBlock: {
        display: 'flex',
        gap: 13.5,
    },
    trainingCardBackground:  (theme: Theme) => ({
        backgroundImage: `url(${img7})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: theme.spacing(54),
        height: theme.spacing(56),
        borderRadius: theme.spacing(1.75),
    }),
};

const RootPage = ({isMenuOpen}: Props) => {
    const isDesktop = useMediaQuery('(min-width:950px)');
    const history = useHistory();

    const handleGoToGallery = () => {
        history.push(ROUTES.GALLERY.url);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: isDesktop ? 11 : 0, minWidth: 330}}>
            <Box sx={[!isDesktop && styles.headerMobile]}>
                <Container maxWidth='md' sx={styles.galleryBlock}>
                    {!isMenuOpen && (
                        <Box sx={[isDesktop && styles.welcomeBlock__info, !isDesktop && styles.welcomeBlockMobile__info]}>
                            <Typography
                                variant={isDesktop ? 'h1' : 'h2'}
                                color={!isDesktop ? '#FFF' : '#000000'}
                                // sx={[!isDesktop && styles.titleMobile]}
                            >
                                {TITLE}
                            </Typography>
                            <Typography
                                variant={isDesktop ? 'h4' : 'h5'}
                                color={!isDesktop ? '#FFF' : '#000000'}
                                sx={!isDesktop && styles.typographyMobile}
                            >
                                Привет, я Ксюша! Мастер-преподаватель по маникюру. Мне не интересно дать сертификат
                                человеку, мне
                                интересно рассказать, исправить, научить.
                            </Typography>
                            <SubscribeButton size='large'/>
                        </Box>
                    )}
                    {isDesktop && (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 0,
                            }}
                        >
                            <Box
                                sx={styles.trainingCardBackground}
                            >
                            </Box>
                        </Box>
                    )}
                </Container>
            </Box>
            {isDesktop && (
                <Box sx={styles.showingBlock}>
                    <Box sx={[styles.showingBlock__fronLayer, !isDesktop && styles.showingBlockMobile__fronLayer]}>
                        <Typography variant={isDesktop ? 'h3' : 'h6'}>Наращивание</Typography>
                        <Typography variant={isDesktop ? 'h3' : 'h6'}>Коррекция</Typography>
                    </Box>
                    <NailCard src={img2} title='Наращивание' sx={{width: '50%'}}/>
                    <NailCard src={img3} title='Коррекция' sx={{width: '50%'}}/>
                </Box>
            )}

            <Container maxWidth='md'>
                <Box sx={[styles.welcomeBlock, !isDesktop && styles.welcomeBlockMobile]}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isDesktop ? 'flex-start' : 'center',
                            justifyContent: isDesktop ? 'flex-start' : 'center',
                            gap: 2,
                        }}
                    >
                        <Typography
                            variant={isDesktop ? 'h2' : 'h3'}
                            sx={
                                !isDesktop ?
                                    {
                                        width: '312px',
                                        height: '132px',
                                        fontSize: '24px',
                                        lineHeight: '32.78px',
                                        fontWeight: '400',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                    } :
                                    {
                                        width: '312px',
                                    }
                            }
                        >
                            Я мастер по наращиванию экстремальной длины и работе в скоростной технике.
                        </Typography>
                        <SubscribeButton sx={{width:'207px', height:'47px', fontWeight:'light'}}/>
                    </Box>
                    {isDesktop && <NailCard src={img} title={TITLE} sx={styles.welcomeBlock__image}/>}
                </Box>
            </Container>
            <Container maxWidth={isDesktop ? 'xl' : 'xs'}>
                <Box>
                    <Typography variant={isDesktop ? 'h4' : 'h5'}>Галерея</Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: isDesktop ? 4 : 1,
                            gridTemplateColumns: isDesktop ? 'repeat(4, 298px)' : 'repeat(2, 170px)',
                            pt: isDesktop ? 5 : 3,
                            pb: isDesktop ? 0 : 3,
                        }}
                    >
                        <NailCard src={img4} title='Наращивание'
                                  sx={{height: isDesktop ? 340 : 200, maxWidth: '100%'}}/>
                        <NailCard src={img5} title='Наращивание'
                                  sx={{height: isDesktop ? 340 : 200, maxWidth: '100%'}}/>
                        <NailCard src={img6} title='Наращивание'
                                  sx={{height: isDesktop ? 340 : 200, maxWidth: '100%'}}/>
                        <Typography
                            variant={isDesktop ? 'h5' : 'h6'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                cursor: 'pointer',
                            }}
                            onClick={handleGoToGallery}
                        >
                            Больше фото
                            <ArrowCircleRightOutlinedIcon/>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Map/>
        </Box>
    );
};

export default RootPage;
