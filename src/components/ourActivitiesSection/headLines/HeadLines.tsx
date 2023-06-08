'use client';
import { type ActivitiesLabel } from '@/types';
import React from 'react';
import { HeadlineBtn } from './HeadlineBtn';

interface HeadLinesProps {
  setActiveLabel: React.Dispatch<React.SetStateAction<ActivitiesLabel>>;
  activeLabel: ActivitiesLabel;
}

export const HeadLines = ({ setActiveLabel, activeLabel }: HeadLinesProps) => {
  const getClassesForTabBtn = (
    activeLabel: ActivitiesLabel,
    currentTabLabel: ActivitiesLabel
  ) => {
    const isSelected = activeLabel === currentTabLabel;
    const selectedClass =
      'h-20 scale-110  opacity-80 rounded-l-2xl rounded-r-2xl border-2 border-white border-opacity-50';
    const defaultTabsClasses = {
      education: 'relative cursor-pointer rounded-l-[1rem] rounded-r-[5rem]',
      jobs: 'relative cursor-pointer rounded-md',
      projects: 'relative cursor-pointer rounded-l-[5rem] rounded-r-[1rem]',
    };

    if (isSelected) {
      return selectedClass;
    } else {
      return defaultTabsClasses[currentTabLabel];
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white">הפעילות שלנו</h2>
      <div className="flex h-32 w-11/12 items-center justify-center gap-2">
        <HeadlineBtn
          onClick={() => setActiveLabel('education')}
          className={getClassesForTabBtn(activeLabel, 'education')}
          text="העשרה"
        />
        <HeadlineBtn
          onClick={() => setActiveLabel('jobs')}
          className={getClassesForTabBtn(activeLabel, 'jobs')}
          text="מציאת עבודה"
        />
        <HeadlineBtn
          onClick={() => setActiveLabel('projects')}
          className={getClassesForTabBtn(activeLabel, 'projects')}
          text="פרוייקטים"
        />
      </div>
    </div>
  );
};
