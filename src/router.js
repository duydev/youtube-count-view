import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { NotFound } from './components/not-found';
import { VideoPage } from './components/video-page';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/video/:id" component={VideoPage} />
      <Route component={NotFound} />
    </Switch>
  );
};
