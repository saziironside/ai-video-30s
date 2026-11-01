import React from 'react';
import {useCurrentFrame, spring, Sequence, Audio} from 'remotion';
import {NarrationBar} from '../components/NarrationBar';
import {CatHero} from '../components/CatHero';
import {SpiderHero} from '../components/SpiderHero';

// Built-in Base64 audio to avoid any network or file errors

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = spring({fps: 30, frame, from: 0, to: 1});
  const catDrop = spring({fps: 30, frame, from: -200, to: 250, config: {damping: 12}});
  const spiderDrop = spring({fps: 30, frame: frame - 10, from: -200, to: 250, config: {damping: 12}});
  return (
    <>
      <div style={{ position: 'absolute', top: 100, width: '100%', textAlign: 'center', fontSize: 72, fontWeight: 'bold', color: '#fff', opacity: titleOpacity, fontFamily: 'sans-serif' }}>HELLO KITTY &amp; SPIDER-MAN</div>
      <CatHero style={{ left: 200, bottom: catDrop }} />
      <SpiderHero style={{ right: 200, bottom: spiderDrop }} />
      <NarrationBar text="Two heroes. One city. No nights off." start={0} end={149} />
      
    </>
  );
};
