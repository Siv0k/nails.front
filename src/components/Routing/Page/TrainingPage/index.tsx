import { useEffect } from 'react';
import {
  Box, Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  List,
  ListItemText,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';

import SubscribeButton from 'components/SubscribeButton';
import { getTrainings } from '../../../../api/training';
import { createEffect, createStore } from 'effector';
import { useEvent, useStore } from 'effector-react';
import { isErrorResponse } from '../../../../api';
import { Training } from '../../../../api/training/types';
import TrainingCards from './TrainingCards';
import AddTrainingCards from './AddTrainingCards';

const fetchTraining = createEffect(async () => {
  const req = await getTrainings();

  if (isErrorResponse(req)) {
    return [] as Training[];
  }

  return req;
});

const $training = createStore<Training[]>([]).on(
  fetchTraining.doneData, (state, result) => result,
);

const TrainingPage = () => {
  const trainings = useStore($training);
  const fetchEvent = useEvent(fetchTraining);
  const isDekstop = useMediaQuery('(min-width:950px)');


  useEffect(() => {
    fetchEvent();
  }, []);

  return <Container maxWidth='xl' sx={{ pb: 13, minWidth: 330 }}>
    <Typography variant={isDekstop ? 'h5' : 'h6'}>
      Открытость к советам и опыту других мастеров помогла мне стать истинным профессионалом.
      Сейчас я готова передать свои знания и умения другим, чтобы они могли достичь таких же высот в своей сфере и
      превзойти свои ожидания.
    </Typography>

    <AddTrainingCards />
    <TrainingCards trainings={trainings} />
  </Container>;
};

export default TrainingPage;