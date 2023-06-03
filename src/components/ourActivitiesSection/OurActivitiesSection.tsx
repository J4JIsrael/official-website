'use client';
import { HeadLines } from '@/components/ourActivitiesSection/headLines/HeadLines';
import { OurActivities } from '@/components/ourActivitiesSection/ourActivities/OurActivities';
import { type ActivitiesLabel } from '@/types';
import React, { useState } from 'react';
import { CircleShadow } from './circleShadow/CircleShadow';
import {Subtitle} from './subtitle/Subtitle';

export const OurActivitiesSection = () => {
  const [activeLabel, setActiveLabel] = useState<ActivitiesLabel>('education');

  return (
    <section className='relative'>
      <CircleShadow />
      <HeadLines setActiveLabel={setActiveLabel} />
      <Subtitle  activeLabel={activeLabel}/>
      <OurActivities activeLabel={activeLabel} />
    </section>
  );
};
