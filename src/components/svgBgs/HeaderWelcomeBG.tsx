import Image from 'next/image';

import { type SvgBGProps } from '@/types';

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
