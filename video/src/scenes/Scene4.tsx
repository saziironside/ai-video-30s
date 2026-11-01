import React from 'react';
import {useCurrentFrame, spring, Sequence, Audio} from 'remotion';
import {NarrationBar} from '../components/NarrationBar';
import {CatHero} from '../components/CatHero';
import {SpiderHero} from '../components/SpiderHero';
import {Criminal} from '../components/Criminal';


export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const dashCat = spring({fps: 30, frame: frame - 10, from: 650, to: 800, config: {damping: 12}});
  const dashSpider = spring({fps: 30, frame: frame - 10, from: 650, to: 800, config: {damping: 12}});
  return (
    <>
      <CatHero style={{ left: dashCat, bottom: 250 }} />
      <SpiderHero style={{ right: dashSpider, bottom: 250 }} />
      <Criminal style={{ left: 850, bottom: 250 }} />
      <NarrationBar text="Two against one. The night never stood a chance." start={540} end={749} />
      
    </>
  );
};
