import React from 'react';

export default function Logo({ className = '', height = 45, light = false }) {
  return (
    <img 
      src="/uploads/logo_inova.jpg" 
      alt="Inova Móveis Planejados" 
      height={height}
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      className={className}
    />
  );
}
