import React from 'react';

export const CommunitySentence = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(240.3deg, rgba(0, 255, 157, 0.1) -19.45%, rgba(213, 93, 255, 0.2) 120.21%);',
        backdropFilter: 'blur(12.5px)',
      }}
      className="flex h-[100px] flex-row items-center justify-center rounded-[100px] font-black text-white shadow-sentence sm:text-[22px] md:text-[23px] lg:text-[34px]"
    >
      <p>תמצא לך למה, תמצא שותפים ותתחיל עכשיו</p>
    </div>
  );
};
