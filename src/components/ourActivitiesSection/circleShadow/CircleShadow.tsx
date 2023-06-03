import React from 'react';

export const CircleShadow = () => {
  return (
    <div
    className='lg:w-[936px] lg:h-[943px] sm:w-[100px] sm:h-[100px]'
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        background: '#4E26C0',
        opacity: 0.23,
        filter: 'blur(217px)',
        overflowX: 'clip',
      }}
    ></div>
  );
};
