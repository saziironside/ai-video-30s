import React from 'react';

export const CatHero: React.FC<{style?: React.CSSProperties}> = ({style}) => {
  return (
    <div style={{ position: 'absolute', width: 150, height: 200, ...style }}>
      <div style={{ position: 'absolute', bottom: 0, left: 10, width: 20, height: 40, backgroundColor: '#fff', borderRadius: 10, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 10, width: 20, height: 40, backgroundColor: '#fff', borderRadius: 10, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 60, left: -20, width: 20, height: 60, backgroundColor: '#fff', borderRadius: 10, border: '4px solid #000', transform: 'rotate(20deg)' }} />
      <div style={{ position: 'absolute', bottom: 60, right: -20, width: 20, height: 60, backgroundColor: '#fff', borderRadius: 10, border: '4px solid #000', transform: 'rotate(-20deg)' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 25, width: 100, height: 110, backgroundColor: '#ffffff', borderRadius: 50, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', top: 0, left: 25, width: 100, height: 80, backgroundColor: '#ffffff', borderRadius: '50%', border: '4px solid #000' }}>
        <div style={{ position: 'absolute', top: -25, left: 5, width: 30, height: 40, backgroundColor: '#ffffff', border: '4px solid #000', borderRadius: '50% 50% 0 0' }} />
        <div style={{ position: 'absolute', top: -25, right: 5, width: 30, height: 40, backgroundColor: '#ffffff', border: '4px solid #000', borderRadius: '50% 50% 0 0' }} />
        <div style={{ position: 'absolute', top: 30, left: 20, width: 10, height: 15, backgroundColor: '#000', borderRadius: 10 }} />
        <div style={{ position: 'absolute', top: 30, right: 20, width: 10, height: 15, backgroundColor: '#000', borderRadius: 10 }} />
        <div style={{ position: 'absolute', top: 45, left: -10, width: 30, height: 3, backgroundColor: '#000' }} />
        <div style={{ position: 'absolute', top: 55, left: -10, width: 30, height: 3, backgroundColor: '#000' }} />
        <div style={{ position: 'absolute', top: 45, right: -10, width: 30, height: 3, backgroundColor: '#000' }} />
        <div style={{ position: 'absolute', top: 55, right: -10, width: 30, height: 3, backgroundColor: '#000' }} />
        <div style={{ position: 'absolute', top: -35, left: 25, width: 50, height: 30, backgroundColor: '#ff0000', borderRadius: 10, border: '4px solid #000' }}>
          <div style={{ position: 'absolute', top: 5, left: 15, width: 20, height: 20, backgroundColor: '#ff0000', borderRadius: '50%', border: '4px solid #000' }} />
        </div>
      </div>
    </div>
  );
};