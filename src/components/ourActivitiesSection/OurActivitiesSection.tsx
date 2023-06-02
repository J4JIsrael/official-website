'use client';
import { HeadLines } from '@/components/ourActivitiesSection/headLines/HeadLines';
import { OurActivities } from '@/components/ourActivitiesSection/ourActivities/OurActivities';
import { type ActivitiesLabel } from '@/types';
import React, { useState } from 'react';

export const OurActivitiesSection = () => {
  const [activeLabel, setActiveLabel] = useState<ActivitiesLabel>('education');

  return (
    <>
      <HeadLines setActiveLabel={setActiveLabel} />
      <OurActivities activeLabel={activeLabel} />
    </>
  );
};
