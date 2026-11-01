import React from 'react';

export const NightSkyline: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a2e', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 100, right: 150, width: 150, height: 150, backgroundColor: '#ffeb3b', borderRadius: '50%', boxShadow: '0 0 40px #ffeb3b' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ width: '15%', height: '60%', backgroundColor: '#16213e' }} />
        <div style={{ width: '20%', height: '90%', backgroundColor: '#0f3460' }} />
        <div style={{ width: '10%', height: '40%', backgroundColor: '#16213e' }} />
        <div style={{ width: '25%', height: '75%', backgroundColor: '#0f3460' }} />
        <div style={{ width: '30%', height: '50%', backgroundColor: '#16213e' }} />
      </div>
    </div>
  );
};