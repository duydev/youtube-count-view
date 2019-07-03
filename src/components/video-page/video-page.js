import React from 'react';
import { VideoDetail } from '../video-detail';

export const VideoPage = ({ match }) => {
  const videoId = match.params.id;

  return <VideoDetail videoId={videoId} />;
};
