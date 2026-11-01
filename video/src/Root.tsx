import React from 'react';
import {Composition} from 'remotion';
import {MainVideo} from './MainVideo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="Main"
      component={MainVideo}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};