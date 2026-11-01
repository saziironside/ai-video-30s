import React from 'react';
import {useCurrentFrame, spring, Sequence, Audio} from 'remotion';
import {NarrationBar} from '../components/NarrationBar';
import {CatHero} from '../components/CatHero';
import {SpiderHero} from '../components/SpiderHero';


export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const catX = spring({fps: 30, frame: frame - 10, from: 200, to: 700, config: {damping: 14}});
  const spiderX = spring({fps: 30, frame: frame - 10, from: 200, to: 700, config: {damping: 14}});
  const blushOpacity = spring({fps: 30, frame: frame - 60, from: 0, to: 1});
  return (
    <>
      <CatHero style={{ left: catX, bottom: 250 }} />
      <SpiderHero style={{ right: spiderX, bottom: 250 }} />
      <div style={{ position: 'absolute', bottom: 310, left: catX + 110, width: 20, height: 10, backgroundColor: 'pink', borderRadius: '50%', opacity: blushOpacity }} />
      <NarrationBar text="A cat with a bow. A spider with a plan." start={150} end={329} />
      
    </>
  );
};
