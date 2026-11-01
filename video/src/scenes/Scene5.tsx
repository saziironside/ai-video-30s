import React from 'react';
import {useCurrentFrame, spring, Sequence, Audio} from 'remotion';
import {NarrationBar} from '../components/NarrationBar';
import {CatHero} from '../components/CatHero';
import {SpiderHero} from '../components/SpiderHero';


export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const catX = spring({fps: 30, frame: frame - 10, from: 800, to: 750, config: {damping: 20}});
  const spiderX = spring({fps: 30, frame: frame - 10, from: 800, to: 750, config: {damping: 20}});
  const blushOpacity = spring({fps: 30, frame: frame - 30, from: 0, to: 1});
  return (
    <>
      <CatHero style={{ left: catX, bottom: 250 }} />
      <SpiderHero style={{ right: spiderX, bottom: 250 }} />
      <div style={{ position: 'absolute', bottom: 310, left: catX + 110, width: 25, height: 15, backgroundColor: '#ff69b4', borderRadius: '50%', opacity: blushOpacity }} />
      <div style={{ position: 'absolute', bottom: 450, left: '50%', transform: 'translateX(-50%)', fontSize: 80, opacity: blushOpacity }}>??</div>
      <NarrationBar text="Crime never sleeps. Neither do they." start={750} end={899} />
      
    </>
  );
};
