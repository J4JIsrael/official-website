'use client';
import React from 'react';
import { Card } from './Card';

import { cardContent } from './cardContent';

interface OurActivitiesProps {
  activeLabel: 'jobs' | 'education' | 'projects';
}

export const OurActivities = ({ activeLabel }: OurActivitiesProps) => {
  return (
    <div className="px-36 relative flex  w-full flex-wrap  items-center justify-center gap-4">
      {cardContent[activeLabel].map((item, i) => (
        <Card key={i} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
