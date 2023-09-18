import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItemText,
  Theme,
  useMediaQuery,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import SubscribeButton from '../../../SubscribeButton';
import { Training } from '../../../../api/training/types';

interface Props {
  trainings: Training[]
}

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 4,
    pt: 4,
  },
  card: {
    width: (theme: Theme) => theme.spacing(50),
    textAlign: 'center',
  },
  mobileCard: {
    width: (theme: Theme) => theme.spacing(30),
  },
};

const TrainingCards = ({trainings}: Props) => {
  const isDekstop = useMediaQuery('(min-width:950px)');

  return <Box sx={styles.cardContainer}>
    {trainings.map((card, i) => (
      <Card key={i + card.title} sx={isDekstop ? styles.card : styles.mobileCard}>
        <CardHeader title={card.title} sx={{ pt: 4 }} />
        <CardContent>
          <List>
            {card.services.map((string, SI) => (
              <>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={string} />
                </ListItem>
                {SI !== card.services.length - 1 && <Divider component='li' />}
              </>
            ))}
            <ListItem sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={card.price + 'BYN'}
                sx={{
                  paddingTop: 2,
                }}
                primaryTypographyProps={{
                  variant: 'h5',
                  sx: {
                    fontWeight: 600,
                  },
                }}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'center',
            pb: 4,
          }}
        >
          <SubscribeButton />
        </CardActions>
      </Card>
    ))}
  </Box>
}

export default TrainingCards