import React from 'react';

export const CircleShadow = () => {
  return (
    <div
      className="sm:h-[700px] sm:w-full lg:h-[743px] lg:w-[936px]"
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        background: '#4E26C0',
        opacity: 0.24,
        filter: 'blur(217px)',
        overflowX: 'clip',
        minWidth: '300px',
        minHeight: '400px',
      }}
    ></div>
  );
};
