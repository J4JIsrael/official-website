import React, { useState } from 'react';

interface HeadlineBtnProps {
    text:string;
    myClass: string;
}




export const HeadlineBtn: React.FC<HeadlineBtnProps> = ({ text, myClass}) => {


  return (

    <div className={myClass}>
      <div className='absolute w-full h-full bg-gradient-to-r from-violet to-aqua-bright flex items-center justify-center'>
        <h3 className='absolute bg-opacity-0 text-white font-sans font-bold text-lg'>{text}</h3>
      </div>
    </div>

  );
};
