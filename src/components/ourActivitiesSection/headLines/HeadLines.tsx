'use client';
import { type ActivitiesLabel } from '@/types';
import React, { useState } from 'react';
import { HeadlineBtn } from './HeadlineBtn';

interface HeadLinesProps {
  setActiveLabel: React.Dispatch<React.SetStateAction<ActivitiesLabel>>;
}

export const HeadLines = ({ setActiveLabel }: HeadLinesProps) => {
  type btnSelected = 'btnL' | 'btnCenter' | 'btnR';
  const setIsSelected = useState<btnSelected>('btnCenter')[1];

  const onClick = (type: btnSelected, newActiveLabel: ActivitiesLabel) => {
    setActiveLabel(newActiveLabel);
    setIsSelected(type);
  };

  return (
    <div className="flex  flex-col items-center justify-evenly ">
      <h2 className="text-3xl font-bold text-white">הפעילות שלנו</h2>
      <div className=" flex h-32 w-11/12 items-center justify-center gap-4">
        <HeadlineBtn
          onClick={() => onClick('btnR', 'education')}
          className="relative rounded-l-[1rem] rounded-r-[5rem]"
          text="העשרה"
        />
        <HeadlineBtn
          onClick={() => onClick('btnCenter', 'jobs')}
          className=" rounded-lg"
          text="מציאת עבודה"
        />
        <HeadlineBtn
          onClick={() => onClick('btnL', 'projects')}
          className=" rounded-l-[5rem] rounded-r-[1rem]"
          text="פרוייקטים"
        />
      </div>
    </div>
  );
};
