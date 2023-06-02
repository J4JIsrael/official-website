'use client';
import { type ActivitiesLabel } from '@/types';
import { Card } from './Card';
import { cardContent } from './cardContent';

interface OurActivitiesProps {
  activeLabel: ActivitiesLabel;
}

export const OurActivities = ({ activeLabel }: OurActivitiesProps) => {
  return (
    <div className="relative flex w-full  flex-wrap items-center  justify-center gap-4 px-36">
      {cardContent[activeLabel].map((item, i) => (
        <Card key={i} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
