'use client';
import React, { useState } from 'react';
import { OurActivities } from '../ourActivities/OurActivities';
import { HeadLines } from '../headLines/HeadLines';

export const OurActivitiesSection = () => {
  const [activeLabel, setActiveLabel] = useState<
    'jobs' | 'education' | 'projects'
  >('education');

  return (
    <>
      <HeadLines setActiveLabel={setActiveLabel} />
      <OurActivities activeLabel={activeLabel} />
    </>
  );
};
