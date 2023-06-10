import { QuoteBG } from '@/components/svgBgs/QuoteBG';
import React from 'react';

export const CommunitySentence = () => {
  return (
    <div className="relative z-50 w-full">
      <QuoteBG className="absolute left-0 top-0 h-full w-full " />
      <div
        style={{
          background:
            'linear-gradient(240.3deg, rgba(0, 255, 157, 0.1) -19.45%, rgba(213, 93, 255, 0.2) 120.21%);',
          backdropFilter: 'blur(12.5px)',
        }}
        className="flex h-[100px] w-full flex-row items-center justify-center rounded-[100px]  
          "
      >
        <p
          className="flex h-full w-full items-center justify-center font-black text-white
          shadow-sentence xs:px-4 xs:text-center xs:text-[20px]
          sm:text-center sm:text-[22px]
          md:text-center 
          md:text-[23px]
          lg:text-center lg:text-[34px]"
        >
          תמצא לך למה, תמצא שותפים ותתחיל עכשיו
        </p>
      </div>
    </div>
  );
};
