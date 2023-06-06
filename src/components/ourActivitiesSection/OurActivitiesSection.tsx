'use client';
import { HeadLines } from '@/components/ourActivitiesSection/headLines/HeadLines';
import { OurActivities } from '@/components/ourActivitiesSection/ourActivities/OurActivities';
import { ActivityBG } from '@/components/svgBgs';
import { type ActivitiesLabel } from '@/types';
import React, { useState } from 'react';
import { Subtitle } from './subtitle/Subtitle';

export const OurActivitiesSection = () => {
  const [activeLabel, setActiveLabel] = useState<ActivitiesLabel>('education');

  return (
    <section className="relative">
      <ActivityBG className="absolute left-0 top-0 h-full w-full" />
      <HeadLines setActiveLabel={setActiveLabel} />
      <Subtitle activeLabel={activeLabel} />
      <OurActivities activeLabel={activeLabel} />
    </section>
  );
};
