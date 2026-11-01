import React from 'react';
import {useCurrentFrame, spring, Sequence, Audio} from 'remotion';
import {NarrationBar} from '../components/NarrationBar';
import {CatHero} from '../components/CatHero';
import {SpiderHero} from '../components/SpiderHero';
import {Criminal} from '../components/Criminal';


export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const criminalX = spring({fps: 30, frame: frame - 10, from: -300, to: 850, config: {damping: 20}});
  return (
    <>
      <CatHero style={{ left: 650, bottom: 250 }} />
      <SpiderHero style={{ right: 650, bottom: 250 }} />
      <Criminal style={{ left: criminalX, bottom: 250 }} />
      <NarrationBar text="Then trouble shows up, and drops the bag." start={330} end={539} />
      
    </>
  );
};
