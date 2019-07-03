/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';

import { VideoDetail } from './components/video-detail';
import { Footer } from './components/footer/footer';

export const App = props => {
  return (
    <Fragment>
      <VideoDetail videoId="knW7-x7Y7RE" />
      <Footer />
    </Fragment>
  );
};
