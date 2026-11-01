import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const NarrationBar: React.FC<{text: string; start: number; end: number}> = ({text, start, end}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 10, end - 10, end], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'absolute', bottom: 60, width: '100%', display: 'flex', justifyContent: 'center', opacity, zIndex: 999 }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px 40px', borderRadius: 20, border: '2px solid #fff' }}>
        <p style={{ color: '#fff', fontSize: 44, margin: 0, fontFamily: 'sans-serif', fontWeight: 'bold' }}>{text}</p>
      </div>
    </div>
  );
};