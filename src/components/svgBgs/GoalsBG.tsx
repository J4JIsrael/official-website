import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const GoalsBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/Goals.svg"
      alt="goals"
      fill
      className="object-cover"
    />
  </div>
);
