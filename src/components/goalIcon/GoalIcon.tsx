import Image from 'next/image';
import React from 'react';

interface IconProps {
  svgIcon: React.ReactNode;
}

export const GoalIcon = ({ svgIcon }: IconProps) => {
  return (
    <div className="relative flex h-60 w-60 flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="absolute h-full w-full  rounded-full bg-gradient-radial" />
        <div className="absolute h-full w-full  rounded-full bg-gradient-linear mix-blend-multiply" />
        {svgIcon}
        <div className="absolute h-full w-full rounded-full border border-white opacity-10" />
        <div className="absolute h-5/6 w-5/6 rounded-full border border-white opacity-20" />
        <div className="absolute h-4/6 w-4/6 rounded-full border border-white opacity-30" />
        <div className="absolute h-3/6 w-3/6 rounded-full border border-white opacity-30" />
      </div>
      <h3 className="absolute -bottom-10 text-3xl text-aqua-bright text-white">
        קורסים והעשרה
      </h3>
    </div>
  );
};
