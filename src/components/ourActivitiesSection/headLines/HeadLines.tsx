'use client';
import { type ActivitiesLabel } from '@/types';
import React, { useEffect, useState } from 'react';
import { HeadlineBtn } from './HeadlineBtn';

interface HeadLinesProps {
  setActiveLabel: React.Dispatch<React.SetStateAction<ActivitiesLabel>>;
  activeLabel: ActivitiesLabel;
}

export const HeadLines = ({ setActiveLabel, activeLabel }: HeadLinesProps) => {
  type btnSelected = 'btnL' | 'btnCenter' | 'btnR';
  const [isSelected, setIsSelected] = useState<btnSelected>('btnCenter');

  const [btnLSelected, setBtnLSelected] = useState('');
  const [btnCenter, setBtnCenterSelected] = useState('');
  const [btnR, setBtnRSelected] = useState('');

  const selectedClass =
    'h-20 scale-110  opacity-80  rounded-l-2xl rounded-r-2xl'; //scale-x-110

  const onClick = (type: btnSelected, newActiveLabel: ActivitiesLabel) => {
    setActiveLabel(newActiveLabel);
    setIsSelected(type);
  };

  const getClassesSelecedTab = (
    activeLabel: ActivitiesLabel,
    currentTabLabel: ActivitiesLabel
  ) => {
    return activeLabel === currentTabLabel ? selectedClass : '';
  };

  useEffect(() => {
    isSelected === 'btnL'
      ? setBtnLSelected(selectedClass)
      : setBtnLSelected('');
    isSelected === 'btnCenter'
      ? setBtnCenterSelected(selectedClass)
      : setBtnCenterSelected('');
    isSelected === 'btnR'
      ? setBtnRSelected(selectedClass)
      : setBtnRSelected('');
    console.log(selectedClass);
  }, [isSelected]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white">הפעילות שלנו</h2>
      <div className="flex h-32 w-11/12 items-center justify-center gap-2">
        <HeadlineBtn
          onClick={() => onClick('btnR', 'education')}
          className={`relative rounded-l-[1rem] rounded-r-[5rem] ${getClassesSelecedTab(
            activeLabel,
            'education'
          )}  ${btnR}`}
          text="העשרה"
        />
        <HeadlineBtn
          onClick={() => onClick('btnCenter', 'jobs')}
          className={`rounded-lg focus:scale-x-150 ${getClassesSelecedTab(
            activeLabel,
            'jobs'
          )} ${btnCenter}`}
          text="מציאת עבודה"
        />
        <HeadlineBtn
          onClick={() => onClick('btnL', 'projects')}
          className={`rounded-l-[5rem] rounded-r-[1rem] ${getClassesSelecedTab(
            activeLabel,
            'projects'
          )} ${btnLSelected}`}
          text="פרוייקטים"
        />
      </div>
    </div>
  );
};
