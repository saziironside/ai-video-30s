import React from 'react';
import {Sequence} from 'remotion';
import {NightSkyline} from './components/NightSkyline';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';

/**
 * Main video layout stacking the skyline and sequential scenes.
 */
export const MainVideo: React.FC = () => {
  return (
    <>
      <NightSkyline />
      {/* Scene 1 */}
      <Sequence from={0} durationInFrames={150}>
        <Scene1 />
      </Sequence>
      {/* Scene 2 */}
      <Sequence from={150} durationInFrames={180}>
        <Scene2 />
      </Sequence>
      {/* Scene 3 */}
      <Sequence from={330} durationInFrames={210}>
        <Scene3 />
      </Sequence>
      {/* Scene 4 */}
      <Sequence from={540} durationInFrames={210}>
        <Scene4 />
      </Sequence>
      {/* Scene 5 */}
      <Sequence from={750} durationInFrames={150}>
        <Scene5 />
      </Sequence>
    </>
  );
};
