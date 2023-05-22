import React, { useState } from 'react';

interface HeadlineBtnProps {
    roundedL: string;
    roundedR: string;
    text:string;
}

export const HeadlineBtn: React.FC<HeadlineBtnProps> = ({ roundedL,  roundedR, text}) => {
  return (
    <div className={`relative w-96 h-24 rounded-l-${roundedL} rounded-r-${roundedR} overflow-hidden flex justify-center items-center hover:rounded-3xl opacity-40 hover:h-32 hover:opacity-80`}>
      <div className='absolute w-full h-full bg-gradient-to-r from-violet to-aqua-bright flex items-center justify-center'>
        <h3 className='absolute bg-opacity-0 text-white font-sans font-bold text-2xl'>{text}</h3>
      </div>
    </div>
  );
};
