import React from 'react';

export const SpiderHero: React.FC<{style?: React.CSSProperties}> = ({style}) => {
  return (
    <div style={{ position: 'absolute', width: 150, height: 200, ...style }}>
      <div style={{ position: 'absolute', bottom: 0, left: 10, width: 20, height: 40, backgroundColor: '#1a237e', borderRadius: 10, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 10, width: 20, height: 40, backgroundColor: '#1a237e', borderRadius: 10, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 60, left: -20, width: 20, height: 60, backgroundColor: '#d32f2f', borderRadius: 10, border: '4px solid #000', transform: 'rotate(20deg)' }} />
      <div style={{ position: 'absolute', bottom: 60, right: -20, width: 20, height: 60, backgroundColor: '#d32f2f', borderRadius: 10, border: '4px solid #000', transform: 'rotate(-20deg)' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 25, width: 100, height: 110, backgroundColor: '#d32f2f', borderRadius: 20, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', top: 0, left: 25, width: 100, height: 80, backgroundColor: '#d32f2f', borderRadius: '50%', border: '4px solid #000' }}>
        <div style={{ position: 'absolute', top: 20, left: 10, width: 35, height: 25, backgroundColor: '#fff', borderRadius: '50%', transform: 'rotate(-15deg)', border: '4px solid #000' }} />
        <div style={{ position: 'absolute', top: 20, right: 10, width: 35, height: 25, backgroundColor: '#fff', borderRadius: '50%', transform: 'rotate(15deg)', border: '4px solid #000' }} />
      </div>
    </div>
  );
};