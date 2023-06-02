'use client';
import React, { useEffect, useState } from 'react';
import { HeadlineBtn } from './HeadlineBtn';

export const HeadLines = () => {
  type btnSelected = 'btnL' | 'btnCenter' | 'btnR';
  const [isSelected, setIsSelected] = useState<btnSelected>('btnCenter');

  const onClick = (type: btnSelected) => {
    setIsSelected(type);
  };

  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white">הפעילות שלנו</h2>
      <div className=" flex h-32 w-11/12 items-center justify-center gap-2">
        <HeadlineBtn
          onClick={() => setIsSelected('btnR')}
          className="relative rounded-l-[1rem] rounded-r-[5rem]"
          text="העשרה"
        />
        <HeadlineBtn
          onClick={() => setIsSelected('btnCenter')}
          className=" rounded-lg"
          text="מציאת עבודה"
        />
        <HeadlineBtn
          onClick={() => setIsSelected('btnL')}
          className=" rounded-l-[5rem] rounded-r-[1rem]"
          text="פרוייקטים"
        />
      </div>
    </div>
  );
};
