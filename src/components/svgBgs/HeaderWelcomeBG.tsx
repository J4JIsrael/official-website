import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const HeaderWelcomeBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/headerWelcome.svg"
      alt="people graph"
      fill
      className="object-cover"
    />
  </div>
);
