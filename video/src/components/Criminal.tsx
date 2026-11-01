import React from 'react';

export const Criminal: React.FC<{style?: React.CSSProperties}> = ({style}) => {
  return (
    <div style={{ position: 'absolute', width: 120, height: 180, ...style }}>
      <div style={{ position: 'absolute', bottom: 0, left: 15, width: 20, height: 40, backgroundColor: '#222', borderRadius: 5, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 15, width: 20, height: 40, backgroundColor: '#222', borderRadius: 5, border: '4px solid #000' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 10, width: 100, height: 100, backgroundColor: '#333', borderRadius: '40px 40px 0 0', border: '4px solid #000' }} />
      <div style={{ position: 'absolute', top: 0, left: 10, width: 100, height: 80, backgroundColor: '#333', borderRadius: '50% 50% 20% 20%', border: '4px solid #000' }}>
        <div style={{ position: 'absolute', top: 30, left: 25, width: 15, height: 10, backgroundColor: '#ff0000', borderRadius: '50%', boxShadow: '0 0 10px #ff0000' }} />
        <div style={{ position: 'absolute', top: 30, right: 25, width: 15, height: 10, backgroundColor: '#ff0000', borderRadius: '50%', boxShadow: '0 0 10px #ff0000' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: -30, width: 60, height: 70, backgroundColor: '#8d6e63', borderRadius: '50%', border: '4px solid #000' }}>
        <div style={{ position: 'absolute', top: 15, left: 15, fontSize: 30, fontWeight: 'bold', color: '#000' }}>$</div>
      </div>
    </div>
  );
};