import React, { forwardRef } from 'react';

interface HeadlineBtnProps {
  text: string;
  className: string;
  onClick: () => void; 
}

export const HeadlineBtn = ({ text, className, onClick }: HeadlineBtnProps) => {
  return (
    <div
      onClick={onClick}
      className={`absolute h-16 w-44 select-none flex-row items-center justify-center overflow-hidden 
      opacity-40 transition-all duration-200 hover:h-20 hover:scale-110 hover:rounded-3xl  hover:opacity-80 focus:z-10 ${className}`}
    >
      <div className="absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-violet to-aqua-bright">
        <h3 className="absolute bg-opacity-0 font-sans text-lg font-bold text-white">
          {text}
        </h3>
      </div>
    </div>
  );
};
