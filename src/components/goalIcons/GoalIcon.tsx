import React from 'react';

interface IconProps {
  svgIcon: React.ReactNode;
  label: string;
}

export const GoalIcon = ({ svgIcon, label }: IconProps) => {
  return (
    <div className="relative flex h-60 w-60 flex-col items-center justify-center">
      <div className="z-10 flex items-center justify-center">
        <div
          className="absolute z-10 h-full w-full rounded-full "
          style={{
            background:
              'linear-gradient(180deg, rgba(19, 159, 104, 0.28) 0%, rgba(122, 80, 237, 0.196) 100%)',
            filter: 'blur(30px)',
          }}
        />
        <div className="absolute  h-full w-full rounded-full " />
        {svgIcon}
        <div className="absolute z-20 h-full w-full rounded-full border border-white opacity-10" />
        <div className="absolute z-20 h-5/6 w-5/6 rounded-full border border-white opacity-20" />
        <div className="absolute z-20 h-4/6 w-4/6 rounded-full border border-white opacity-30" />
        <div className="absolute z-20 h-3/6 w-3/6 rounded-full border border-white opacity-30 " />
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
