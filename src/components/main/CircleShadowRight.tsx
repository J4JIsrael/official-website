import React from 'react';

export const CircleShadowRight = () => {
  return (
    <div
      className="z-0 sm:h-[700px] sm:w-full lg:h-[446px] lg:w-[793px]"
      style={{
        position: 'absolute',
        right: 0,
        transform: 'translate(30%, -30% )',
        background: '#00FFAA',
        opacity: 0.14,
        filter: 'blur(217px)',
        overflowX: 'clip',
        minWidth: '300px',
        minHeight: '400px',
      }}
    ></div>
  );
};
