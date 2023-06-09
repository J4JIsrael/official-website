import React from 'react';

interface IconProps {
  svgIcon: React.ReactNode;
  label: string;
}

export const GoalIcon = ({ svgIcon, label }: IconProps) => {
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
      <p
        className="absolute -bottom-14 text-3xl text-white
      xs:w-[280px] xs:text-center xs:text-[22px]
      sm:w-[280px] sm:text-center sm:text-[22px]
      md:w-[280px] md:text-center md:text-[32px]

      "
      >
        {label}
      </p>
    </div>
  );
};
