import React from 'react';
import { lazy, Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import { ROOT_ROUTER, ROUTES } from 'config/constants';

const RootPage = lazy(() => import('./Page/RootPage'));
const ServicePage = lazy(() => import('./Page/ServicePage'));
const GalleryPage = lazy(() => import('./Page/GalleryPage'));
const RecordPage = lazy(() => import('./Page/RecordPage'));
const TrainingPage = lazy(() => import('./Page/TrainingPage'));
const ContactsPage = lazy(() => import('./Page/ContactsPage'));

interface Props {
  isMenuOpen: boolean;
}

const Routing = ({ isMenuOpen }: Props) => {
  return (
    <Suspense fallback={<LinearProgress color='secondary' />}>
      <Switch>
        <Route exact path={ROOT_ROUTER}>
          <RootPage isMenuOpen={isMenuOpen} />
        </Route>
        <Route path={ROUTES.SERVICES.url}>
          <ServicePage />
        </Route>
        <Route path={ROUTES.GALLERY.url}>
          <GalleryPage />
        </Route>
        <Route path={ROUTES.SUBSCRIBE.url}>
          <RecordPage />
        </Route>
        <Route path={ROUTES.TRAINING.url}>
          <TrainingPage />
        </Route>
        <Route path={ROUTES.CONTACTS.url}>
          <ContactsPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routing;
