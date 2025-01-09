import React from 'react';

export function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10 bg-gradient-to-b from-[#16171D] via-transparent to-white h-full"
      style={{
        background: `
          linear-gradient(to bottom, #16171D 20%, transparent 100%),
          radial-gradient(circle at 20% 30%, #16171D, transparent 70%),
          radial-gradient(circle at 80% 10%, #16171D, transparent 40%),
          radial-gradient(circle at 10% 90%, #F26B64 10%, transparent 40%),
          radial-gradient(circle at 50% 80%, #D0F16C, transparent 40%),
          radial-gradient(circle at 80% 70%, #9F8AFF, transparent 50%)
        `,
      }}
    />
  );
}

