import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const ActivityBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/Activity.svg"
      alt="quote"
      fill
      className="object-cover"
    />
  </div>
);
